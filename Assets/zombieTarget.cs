using UnityEngine;
using System.Collections;



public class zombieTarget : MonoBehaviour 
{
	
	public Transform destination;
	
	private NavMeshAgent agent;
	
	void Start () 
	{
		agent = gameObject.GetComponent<NavMeshAgent>();
		agent.SetDestination(destination.position);
		GetComponent<Animation>().Play("walk");
	}

	void OnTriggerStay(Collider other)
	{
		if(other.gameObject.tag == "Player")
		GetComponent<Animation>().Play("attack");
	}

	void OnTriggerEnter(Collider other)
	{
		if(other.gameObject.tag == "arrow")
		GetComponent<Animation>().Play("back_fall");
		StartCoroutine(Die());
	//	Destroy(gameObjectWithTag("arrow"));

	}
	IEnumerator Die(){
		yield return new WaitForSeconds(1); //waits x seconds and body slides
		Destroy(gameObject); //this will work after x seconds.
	}
}

