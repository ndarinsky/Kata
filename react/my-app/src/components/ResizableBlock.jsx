import React from 'react';
import PropTypes from 'prop-types';
import './ResizableBlock.css'




function ResizableBlock(props) {
  return
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Text</th>
          <th>Description</th>
          <th>Notes</th>
        </tr>
        <tr>
          <td>ID1</td>
          <td>Name1</td>
          <td>Text1</td>
          <td>Description1</td>
          <td>Notes1</td>
        </tr>
        <tr>
          <td>ID2</td>
          <td>Name2</td>
          <td>Text2</td>
          <td>Description2</td>
          <td>Notes2</td>
        </tr>
      </table>;
}

ResizableBlock.propTypes = {};

export default ResizableBlock;
