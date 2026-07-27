/**
 * 116. Populating Next Right Pointers in Each Node
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/
 */

var connect = function(root) {
    if(!root) return root;
    function traverse(curr){
        if(curr.left){
            curr.left.next = curr.right;
        }

        if(curr.right && curr.next){
            curr.right.next = curr.next.left;
        }

        curr.left && traverse(curr.left);
        curr.right && traverse(curr.right);
    }
    traverse(root);
    return root;
};