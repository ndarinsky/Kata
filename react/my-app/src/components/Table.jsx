import React from 'react';
import styles from './Table.scss'
import {$} from './../dom'

let $resizer
let $parent
let coords
let value
let type


const onMouseDown = (e) => {
    $resizer = $(e.target)
    $parent = $resizer.closest('[data-type="resizable"]')
    coords = $parent.getCoords()
    type = $resizer.data.resize
    console.log($resizer)
    console.log($parent)
    console.log(coords)
}

const onMouseMove = (e) => {
    if (e.target.nodeName && e.target.nodeName === 'DIV') {
        $resizer = $(e.target)
        $parent = $resizer.closest('[data-type="resizable"]')
        coords = $parent.getCoords()
        type = $resizer.data.resize

        console.log(e.clientX)

        const delta = e.pageX - coords.right
        value = coords.width + delta
        $parent.css({width: value + 'px'})
        $resizer.css({
            right: -delta + 'px',
            bottom: -5000 + 'px'})
    }
}

const onMouseUp = (e) => {
    if (e.target.nodeName && e.target.nodeName === 'TABLE') {
        console.log(e.clientX)
    }
}



function Table() {
  return <div className={styles.table}>
    <table onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
        <thead>
            <tr className={styles.row}>
                <th data-type="resizable">ID<div className='resize'></div></th>
                <th data-type="resizable">Name<div className='resize'></div></th>
                <th data-type="resizable">Text<div className='resize'></div></th>
                <th data-type="resizable">Description<div className='resize'></div></th>
                <th data-type="resizable">Notes<div className='resize'></div></th>
            </tr>
        </thead>
        <tbody>
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
        </tbody>
    </table>
  </div>
}

export default Table;