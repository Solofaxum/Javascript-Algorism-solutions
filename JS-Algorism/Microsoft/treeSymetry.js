
//Check whether a tree is symetry or not

const isTreeEqual = (x, y) => {
    if (x === undefined && y === undefined)
      return true
    else if (x === undefined || y === undefined)
      return false
    else if (x.value === y.value)
      return isTreeEqual(x.left, y.left) && isTreeEqual(x.right, y.right)
    else
      return false
  }
  
  const isTreeSymmetric = tree =>
    isTreeEqual(tree.left, tree.right)
  
  const Node = (value, left, right) => ({value, left, right})
  
  const tree1 =
    Node(1,
      Node(2,
        Node(3, Node(4), Node(5)),
        Node(3, Node(4), Node(5))),
      Node(2,
        Node(3, Node(4), Node(5)),
        Node(3, Node(4), Node(5))))
        
  const tree2 =
    Node(1,
      Node(2,
        Node(3, Node(4), Node(5)),
        Node(3, Node(4), Node(5))),
      Node(2,
        Node(3, Node(4), Node(5)),
        Node(3, Node(4), Node(8))))
  
  console.log(isTreeSymmetric(tree1)) // true
  console.log(isTreeSymmetric(tree2)) // false