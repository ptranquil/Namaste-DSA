/**
 * 701. Insert into a Binary Search Tree
 * https://leetcode.com/problems/insert-into-a-binary-search-tree
 */
// my approach
var insertIntoBST = function(root, val) {
    if(!root){
        let newNode = new TreeNode(val);
        root = newNode;
        return root;
    }

    let R = root;
    function insert(curr, parent){
        if(!curr){
            let newNode = new TreeNode(val);
            if(val > parent.val){
                parent.right = newNode;
            } else {
                parent.left = newNode;
            }
            return;
        }

        if(val > curr.val){
            insert(curr.right, curr)
        } else {
            insert(curr.left, curr);
        }
    }
    insert(root, root)
    return R;
};

// Another same approach with a slide modification
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val);
    if(val > root.val){
        root.right = insertIntoBST(root.right, val)
    } else {
        root.left = insertIntoBST(root.left, val);
    }
    return root;
};