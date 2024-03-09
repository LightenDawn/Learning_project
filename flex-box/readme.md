# <font color="#DC143C">Flexbox axes</font>

- ### main axis
    - #### has `main start` and `main end`, same as `left` and `right`
    - #### `main-size` is about the `main start` to `main end`, same as the `width`
- ### cross axis
    - #### has `cross start` and `cross end`, same as `top` and `bottom`
    - #### has `cross-size` is about the `cross start` to `cross end`, same as `height`


# <font color="#DC143C">Differences of flex and lnline-flex</font>

- flex : will let the container become the `block-level` element
- inline-flex : will let the container becone the `atomic inline-level` element

# <font color="#DC143C">Flex-wrap desc</font>

- flex-wrap: Content outside container will be wrapped
- flex-wrap-reverse: Content outside the container, the last element will be arranged in reverse order.
- flex-nowrap: Contents outside container will overflow.

# <font color="#DC143C">Flex-flow</font>

- flex-flow: <flex-direction> <flex-wrap>

# <font color="#DC143C">justify-content</font>

- #### flex-start: align items to the upper left corner
- #### flex-end: align items to the lower left corner
- #### center: align items vertically in the container
- #### space-between: the spacing between each pair of adjacent items is the same.
- #### space-around: the empty space before the first and after the last item equals half of the space between each pair of adjacent items.
- #### space-evenly: the spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.

# <font color="#DC143C">align-items/contents</font>

- #### stretch: if the items are smaller than the alignment container, auto-sized items will be equally enlarged to fill the container, respecting the items' width and height limits. `This is the default value`
- #### flex-start: align items to the upper left corner
- #### flex-end: align items to the lower left corner
- #### center: align items vertically in the container
- #### baseline: the item with the largest distance between its cross-start margin edge and its baseline is flushed with the cross-start edge of the line.

# <font color="#DC143C">order</font>

- The default order is 0. If you set the order of elements, it will be greater than 0, so the item will be arranged at the end of all elements;

# <font color="#DC143C">flex-grow</font>

- The default order is 0. If you set flex-grow in one of the elements and the value is greater than 1, the element will accept excess whitespace and grow itself.

# <font color="#DC143C">flex-shrink</font>

- If flex-shrink is not set, the element will automatically shrink if it overflows the container.
- If flex-shrink is set to 0, shrinking is disabled.
- If you set flex-shrink beyond a value of 1, the item will shrink faster than other values.

# <font color="#DC143C">flex-basos</font>

- Sets the initial main size of a flex item.

# <font color="#DC143C">flex</font>

- flex: <flex-grow> <flex-shrink> <flex-basis>