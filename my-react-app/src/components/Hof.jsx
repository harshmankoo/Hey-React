    function greet(name){
        return ("Hello from the " + {name})          //Normal Function
    }

    // ===========================================================

    // Here Hof Takes 

    function processUser (fn){
        return fn("NetSquare Softwares")
    }

    // ======================================================
    // here i am using it 

    processUser(greet)