# position

## static

改关键字制定元素使用正常布局行为，即元素在文档中常规流当前的布局位置，正常的布局，此时 top，right，bottom，left 和 z-index 无效

## relative

该关键字下，元素显放置在原先添加的位置，再不改变页面布局的前提下调整元素的位置，会在原来的位置留下空白。position:relative 对table-*-group，table-row，table-column，table-cell，table-caption元素无效。

## absolute

改关键字会使元素被移除正常的文档流，并不会为元素预留空间，通过指定元素相对于最近的非static定位计算相对偏移，来确定元素位置，可以设置外边距并且不会与其他边距合并

# fixed
