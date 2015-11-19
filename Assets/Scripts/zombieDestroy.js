
 function OnTriggerEnter(other : Collider)

 {
   if (other.gameObject.tag == "zombie")
   { 
   if(other.gameObject != null)
   {
        //GetComponent.<Animation>().Play("back_fall");
      //yield WaitForSeconds (1.5);
  // Destroy(other.gameObject);
 }
 }
 }
