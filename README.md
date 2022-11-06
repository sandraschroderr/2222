# GigaStartup


Let us imagine a whole new ecosystem of organizations, the backbone of the ecosystem is a Blockchain. In this scope, we define few terms and protocols that ensures fairness in wealth distrubution and incentivises innovation & development while maintaining autonomy over the organization (DAO).

Let us begin by defining few simple terms within the scope of this new ecosystem:

* User : A person or an Entity within the ecosystem that plays either the role of creator or worker or both

* Creator : User who created a new Entity within the ecosystem is called a `Creator`

* Worker : User who works within an entity bound by the rules set by the policy of that particular Entity

* Task : An action or an event performed by the worker within an Entity. The concept of what constitutes a task is defined over the policy of the ecosystem (more description further).

* Value : A value, usually an integer representing the impact of a particular task done by the worker within an entity. Again, the metric system of the value will be defined clearly in the policy of the entity.

* Entity : `Entitity` is the building block of our ecosystem. 2 or Users can create an Entity in the ecosystem. As we discussed above, Users who create an Entity are recognized as Creators.
	
    **Properties of an Entity**
    
    * To create an Entity within the ecosystem, we require atleast 2 Users.
    * Every Entity must contain:
    	* **Name** : A unique name within the ecosystem to recognize the entity
    	* **Purpose** : What is the purpose of this entity
    	* **Goal** : A metric or an action that defines success of this entity
    	* **Initial Policy** : The set of rules and policies defined as a smart contract and agreed upon all the creators of the entity. The policy describes how the entity should be run without overwriting the policy of DAO. The following must be adressed within the initial policy
    		1. What constitutes a Task in the entity?
    		2. What is the metric system of the Value? i.e., how the impact of a particular is measured within the ecosystem?
  

The definitions are entangled and quite confusing, but it will get much clearer further when we explain the system with an example. But before we need to understand few more concepts that takes place in this ecosystem. The most important one of all those is `Voting System`.

## Voting system within the ecosystem

All the entities that lies within our ecosystem must implement the voting system before finalizing any decision. The decision within an entity can be anything, for example:
1. **Deciding the value of a task done by a particular worker :** The value cannot be and should not be decided by a person or group of people rather should be decided by all the workers within the entity. 
2. **Deciding to alter or add to the initial policy** : Initial policy is the policy that is agreed upon the owners of the entity while creating the entity in the ecosystem. Any worked onboarding an entity should accept the initial policy of the entity (policy lies within the concept of DAO). During the course of time, there comes scenario where altering some of the existing policies or adding a new policy or removing an existing policy must be done. In any case, the alteration cannot be performed without the voting system. 

### Why is voting necessary?
Ans: To maintain fair distribution of power in the entity and in the ecosystem as well.

## Now let us understand how our new ecosystem works with an example and try to understand the advantages.

* Users A & B came up with an idea together and now they want to register their idea as an entity within our ecosystem.
* They will create an entity and the corresponding transaction is added to the ecosystem, i.e., Blockchain
* Let us assume they have created the following entity:
	
    
    {
    	name: Instagram
        purpose: Digital platform to share images and videos
        goal: To make money from the users using the said digital platform
        initial_policy : {
        	task: [
            	A merged PR into main branch in entities github repo
            ],
            value: {
            	1: has very little impact towards goal
                ...
                10: has great impact towards goal. (Cannot achieve goal without this)
            },
            
        }
    }
    
  * Let us try to understand this entity. 
  	* The entity name is Instagram and the creators of this entity within the ecosystem are A & B
  	* The purpose and goal are stated in the entity node clearly.
  	* The initial policy has only two policies. Task and Value. Whenever a Pull request of particular worker gets approved and merged into main, then we consider it as a single task done by that worker.
  	* Each task, i.e, merged pull request is associated with a value and this value needs to be determined by voting of all the workers within the ecosystem. Value with maximum votes is assigned to the task. (The policy should contain how it resolves conflict or ties in voting but let us leave that out of the scope of this tutorial)
  	* Once majority agrees upon the value of the task, it gets appended to the blockchain as a node.

* Now, at this point of time: A & B are owners of the entity and they have decided to join themselves as workers in the entity along with third person C. C has to agree upon the initial policy by providing digital signature to the smart contract.
* Now entity Instagram has :
	* Owners : A, B
	* Workers : A, B, C

* A, B and C will now code various features and as they create Pull Requests and their requests are accepted to be merged, their value will be increasing (more precise mathematical calculation of value is presented in next chapter). Let us assume at the end of the quarter: A,B and C has values of 13, 13 and 4 respectively. (since initial policy has metric system of 1 to 10 for values, the value of the workers lie within this limit but value of owner lies above the limit, i.e, greater or equal to 10. Why? stay tuned).
* Now at end of the quarter, the entity has generated a profit of 1000 eur. Then according to the value of each worker, A gets 392 Eur, B gets 392 Eur and C gets 212 eur.
* Now let us take a stop and look at how the value is calculated within our ecosystem and explain how this system maintains fairness


## Value calculation (mathematical concept)

Let us take the above example. A, B and C together 
