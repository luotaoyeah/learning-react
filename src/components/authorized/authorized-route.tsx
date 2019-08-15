import { Redirect, Route } from 'umi';

import React from 'react';
// eslint-disable-next-line import/no-cycle
import Authorized from './authorized';
import { IAuthorityType } from './check-permissions';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface AuthorizedRoutePops {
  currentAuthority: string;
  component: React.ComponentClass<any, any>;
  render: (props: any) => React.ReactNode;
  redirectPath: string;
  authority: IAuthorityType;
}

const AuthorizedRoute: React.SFC<AuthorizedRoutePops> = ({
  component: Component,
  render,
  authority,
  redirectPath,
  ...rest
}) => (
  <Authorized
    authority={authority}
    noMatch={<Route {...rest} render={() => <Redirect to={{ pathname: redirectPath }} />} />}
  >
    <Route {...rest} render={(props: any) => (Component ? <Component {...props} /> : render(props))} />
  </Authorized>
);

export default AuthorizedRoute;
