GetComponent.<Animation>().Stop();

private var anim:int=0;
private var i:int=0;
private var t:int=0;
private var t1:int=0;
private var n:int=5;
var Arrow1 : GameObject;
var ArrowB : GameObject;
var speed = 0.1;
var arrowp : Transform;
var projectile : Rigidbody;
function Start () {
n=8;

ArrowB.GetComponent.<Renderer>().enabled=false;

  
}
      
                      
                            
    function Update ()
{
t=1+ Time.fixedTime;
  
   
   if (anim==1)
 {

 if (!GetComponent.<Animation>().isPlaying)
{
n=n-1;
 arrowshoot1();
ArrowB.GetComponent.<Renderer>().enabled=true;    
GetComponent.<Animation>().Play("a1");
anim=2;

}


}        
 if (!GetComponent.<Animation>().isPlaying)
{
  if (anim==2)
 {

var instantiatedProjectile : Rigidbody = 
		Instantiate( projectile, arrowp.transform.position, transform.rotation );
		instantiatedProjectile.velocity = transform.TransformDirection( Vector3( 0, 0, speed ) ); 
	   // Physics.IgnoreCollision( instantiatedProjectile. collider, transform.root.collider );

ArrowB.GetComponent.<Renderer>().enabled=false;    
anim=0;
}
}
                                     
                                                                   
           if( Input.GetButtonDown( "Fire1" ) )
      {
  
       if (n>0)
{
    
        if (!GetComponent.<Animation>().isPlaying)
{
 

if (anim==0)
{
  GetComponent.<Animation>().Play("a0");
ArrowB.GetComponent.<Renderer>().enabled=false;
 anim=1;
 
 }
 
  }
    
  }
 }
  
 }
   
   
           
     
    function arrowshoot1()
   {
 
  if (n>0)
   {
     Arrow1.transform.localPosition.z=Arrow1.transform.localPosition.z-0.001;

 Arrow1.GetComponent.<Renderer>().enabled=true;
   }
	else
	{
	
	Arrow1.GetComponent.<Renderer>().enabled=false;
	
	}	
	
	}
	

     
 
 
 
  function OnGUI () {
      
    GUI.contentColor = Color.red;  
    GUI.Label (Rect (10, 70, 200, 20), "Number of arrows= "+ n);
     GUI.Label (Rect (10, 100, 350, 20), "Press "+"'"+"'"+"Fire"+"'"+"'"+" to fire arrows.");
    
      }
 