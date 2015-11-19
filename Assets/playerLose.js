#pragma strict

function Start () {

}

	function OnTriggerEnter (other : Collider) {
		WaitForSeconds(2);{
		Application.LoadLevel("lose");
	}
	}