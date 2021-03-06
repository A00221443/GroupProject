#pragma strict
var cube:GameObject;
var depth : float = 30.0;

function Update(){
	transform.rotation.x = 0.0;
	transform.rotation.y = 0.0;
	transform.rotation.z = 0.0;
}

function OnMouseDrag()
{
	var mousePos = Input.mousePosition;
 	var wantedPos = Camera.main.ScreenToWorldPoint (Vector3 (mousePos.x, mousePos.y, depth));
 	transform.position = wantedPos;
}

function OnMouseUp ()
{
	transform.position.x = Mathf.Round(transform.position.x);
	transform.position.z = Mathf.Round(transform.position.z);
	transform.position.y = 1.0;
}

function OnMouseEnter()
{
	Debug.Log("Over the Cube");
}

function OnMouseDown()
{
	var cubeInstance:GameObject;
	cubeInstance = Instantiate(cube, transform.position, Quaternion.Euler(new Vector3(0,0,0)));
}
