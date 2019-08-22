/*
 * https://reactjs.org/docs/fragments.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C020701 } from '@/components/doc/02-advanced-guides/07/02-07-01';
import { C020702 } from '@/components/doc/02-advanced-guides/07/02-07-02';
import { C020703 } from '@/components/doc/02-advanced-guides/07/02-07-03';
import { C020704 } from '@/components/doc/02-advanced-guides/07/04/02-07-04';
import { C020705 } from '@/components/doc/02-advanced-guides/07/02-07-05';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Use HOCs For Cross-Cutting Concerns" key="1">
        <C020701></C020701>
      </Collapse.Panel>

      <Collapse.Panel header="Don’t Mutate the Original Component. Use Composition." key="2">
        <C020702></C020702>
      </Collapse.Panel>

      <Collapse.Panel header="Convention: Pass Unrelated Props Through to the Wrapped Component" key="3">
        <C020703></C020703>
      </Collapse.Panel>

      <Collapse.Panel header="Convention: Maximizing Composability" key="4">
        <C020704></C020704>
      </Collapse.Panel>

      <Collapse.Panel header="Convention: Wrap the Display Name for Easy Debugging" key="5">
        <C020705></C020705>
      </Collapse.Panel>
    </Collapse>
  );
}
