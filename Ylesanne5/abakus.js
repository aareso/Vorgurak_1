window.onload = function()
{
    var bead = document.getElementsByClassName("bead");
    for (var i = 0; i < bead.length; i++)
	{
        bead[i].onclick = function () 
		{
            var beadPosition = getComputedStyle(this,null).getPropertyValue("float");
            if (beadPosition == "left")
			{
                this.style.cssFloat = "right";
            }
            else if (beadPosition == "right")
			{
                this.style.cssFloat = "left";
            }

        }
    }
}
