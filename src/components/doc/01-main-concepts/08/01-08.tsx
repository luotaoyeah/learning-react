/*
 * https://reactjs.org/docs/lists-and-keys.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-08.less';
import { C010801 } from '@/components/doc/01-main-concepts/08/01-08-01';
import { C010802 } from '@/components/doc/01-main-concepts/08/01-08-02';
import { C010803 } from '@/components/doc/01-main-concepts/08/01-08-03';
import { C010804 } from '@/components/doc/01-main-concepts/08/01-08-04';
import { C010805 } from '@/components/doc/01-main-concepts/08/01-08-05';
import { C010806 } from '@/components/doc/01-main-concepts/08/01-08-06';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Rendering Multiple Components" key="1">
        <C010801></C010801>
      </Collapse.Panel>

      <Collapse.Panel header="Basic List Component" key="2">
        <C010802></C010802>
      </Collapse.Panel>

      <Collapse.Panel header="Keys" key="3">
        <C010803></C010803>
      </Collapse.Panel>

      <Collapse.Panel header="Extracting Components with Keys" key="4">
        <C010804></C010804>
      </Collapse.Panel>

      <Collapse.Panel header="Keys Must Only Be Unique Among Siblings" key="5">
        <C010805></C010805>
      </Collapse.Panel>

      <Collapse.Panel header="Embedding map() in JSX" key="6">
        <C010806></C010806>
      </Collapse.Panel>
    </Collapse>
  );
}
