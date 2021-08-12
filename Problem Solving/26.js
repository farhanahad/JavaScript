const friendsName=['farhan','ahad','alif','ariff','ashik','arman'];

  function perfectFriend(friends){
        let friend=[];
        for(const name of friends){
            if(name != '' && name <=0 && name >=0){
                return 'Please enter a valid string value';
            }

            if(name.length==5){
                friend=name;
                break;
            }
        }
        return friend;
    }
    
    const largestFriend=perfectFriend(friendsName);
    console.log(largestFriend);
