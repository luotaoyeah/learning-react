/*
 * https://reactjs.org/docs/error-boundaries.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C020401 } from '@/components/doc/02-advanced-guides/04/01/02-04-01';
import { C020402 } from '@/components/doc/02-advanced-guides/04/02-04-02';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Introducing Error Boundaries" key="1">
        <C020401></C020401>
      </Collapse.Panel>

      <Collapse.Panel header="Component Stack Traces" key="2">
        <C020402></C020402>
      </Collapse.Panel>
    </Collapse>
  );
}
