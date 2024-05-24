public interface Stack {    // accessor methods 
  public int size(); // return the number of elements in the stack 
  public boolean isEmpty(); // see if the stack is empty
  public Object top() // return the top element
    throws StackEmptyException; // if called on an empty stack // update methods
  public void push (Object element); // push an element onto the stack
  public Object pop() // return and remove the top element of the stack
  throws StackEmptyException; // if called on an empty stack
}