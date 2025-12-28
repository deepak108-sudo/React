Action of slice like increment, decrement contains slice info+increment.

exporting with help of .actions embed the information that that particular function are of which slice.

### Interview point
Why we export as .actions?
{t}
jb mai dispatch karunga then ye jaayega store k paas tou pta kaise chalega ki wo kiss slice kaa part hai. iss liye wo determine k liye.
because .actions automatically embed particular slice to store.

## Phle 
    we have to destructure then we have to change only particular change and return new object. as we saw that in array reference will not change

Now in latest redux **immer** new thing has introduced immer create a draft and tell all the changes on that draft then change the reference.

-> No headache about create a new object creation. Immer do that work.

***Immer: New draft create karta hai***

We we write like that "return state.count=state.count+1";
Immer will give you error that either create a whole new object or update on my draft.

return {...state,count:state.count+1};
            or 
    Use their draft and mutate draft.


-> Now we have payload (its an argument)
{type:{slice1/customIncreaser},action:10}

***Payload is argument***

### How to manipulate
useSelector: take the changes which happen in global event. To use any changes happen in the global in component.