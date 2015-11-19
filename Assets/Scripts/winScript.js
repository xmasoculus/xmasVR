#pragma strict

function Update () {
	 	if (Input.GetKeyDown (KeyCode.Space)){
	 		var zombieSound2: AudioSource = GetComponent.<AudioSource>();
			zombieSound2.Play();
			Application.LoadLevel ("main");
	}
}