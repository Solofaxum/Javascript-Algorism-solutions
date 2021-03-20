
// convert Sorted Array to Binary Search Tree
//-----Input: sorted array with ascending order
//-----output: a Binary Search Tree
//----- find the center element --> define .left, ---> define .right ---> return the root
// --->base case #1, ----> base case #2


//Definition for a binary tree node; needs to be called with "new"
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  let sortedArrayToBST = function(nums) {
      //base cases
      if (nums.length === 1) return new TreeNode(nums[0]);
      if (nums.length === 0) return null;
      
      //create a new TreeNode(center)
      let centerIdx = Math.floor(nums.length/2);    
      let root = new TreeNode(nums[centerIdx]);
      
      //set left node to center of left subtree
      let leftSubtree = nums.slice(0,centerIdx);
      root.left = sortedArrayToBST(leftSubtree);
      
      //set right node to center of right subtree
      let rightSubtree = nums.slice(centerIdx+1,nums.length);
      root.right = sortedArrayToBST(rightSubtree);
        
      return root;
  };
  
  //test case
  sortedArrayToBST([-10,-3,0,5,9]);// => a root node representing this tree: [0,-3,9,-10,null,5]