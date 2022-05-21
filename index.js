/* The Ternary operator takes an if else statement condition, and 
convert it into a one line statement.

So, let's transform this, using the ternary operator:

function checkEqual(a, b)
{
    if(a == b) 
    {
        return true;
    }

    else
    {
        return false;
    }
}

checkEqual(1, 2);

*/


function checkEqual(a, b)
{
   return a === b? true : false;

   /* Actually, you may never need to be as explicit
   as displayed in line 26. You can simply type:

   return a === b;

   ...and it does the exact same thing. The teacher just wanted
   you to see the ternary operator 'sentence?' in its full form.
   
   Alrighty then. 

   */
}


console.log(checkEqual(1, 2));