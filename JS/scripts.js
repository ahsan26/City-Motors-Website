function imageAndColorNameChanger(url, colorName) {
    document.getElementById("priusImages").src = url;
    document.getElementById("priusColorName").innerHTML = colorName;
}

function expandSafety() {
    document.getElementById('extra_safety_detail').innerHTML = 'Every 2017 Prius model is equipped Toyota Safety Sense <sup>TM</sup> P (TSS-P),<sup> 20</sup> an advanced suite of safety technologies to help you drive with confidence.Every 2017 Prius model is equipped Toyota Safety Sense™ P (TSS-P), 20 an advanced suite of safety technologies to help you drive with confidence.Every 2017 Prius model is equipped Toyota Safety Sense <sup>TM</sup> P (TSS-P),<sup> 20</sup> an advanced suite of safety technologies to help you drive with confidence.Every 2017 Prius model is equipped Toyota Safety Sense™ P (TSS-P), 20 an advanced suite of safety technologies to help you drive with confidence.<br /><a id="abc" href="JavaScript:void(0)" onclick="shorterSafety()"><i class="fa fa-chevron-up" aria-hidden="true"></i>  Show Less</a>';
}

function shorterSafety() {
    document.getElementById('extra_safety_detail').innerHTML = 'Every 2017 Prius model is equipped Toyota Safety Sense <sup>TM</sup> P (TSS-P),<sup> 20</sup> an advanced suite of safety technologies to help you drive with confidence.<br /><a id="learnMore" href="JavaScript:void(0)" onclick="expandSafety();"><i class="fa fa-chevron-down" aria-hidden="true"></i> Learn More</a>';
}

function shorterExterior() {
    document.getElementById("exterior_extra_text").innerHTML = 'LED headlights, LED taillights, and available 17-in. wheels help Prius make one powerfully stylish statement.<br /><a href="JavaScript:void(0)" onclick="expandExterior()"><i class="fa fa-chevron-down" aria-hidden="true"></i> Learn More</a>';
}

function expandExterior() {
    document.getElementById("exterior_extra_text").innerHTML = 'LED headlights, LED taillights, and available 17-in. wheels help Prius make one powerfully stylish statement.LED headlights, LED taillights, and available 17-in. wheels help Prius make one powerfully stylish statement.LED headlights, LED taillights, and available 17-in. wheels help Prius make one powerfully stylish statement.LED headlights, LED taillights, and available 17-in. wheels help Prius make one powerfully stylish statement.<br /><a href="JavaScript:void(0)" onclick="shorterExterior()"><i class="fa fa-chevron-up" aria-hidden="true"></i> Show Less</a>';
}

function expandPerformance() {
    document.getElementById("extra_performance_detail").innerHTML = "A double-wishbone rear suspension combined with the body rigidity and aerodynamics of Prius help create a stunningly smooth ride.A double-wishbone rear suspension combined with the body rigidity and aerodynamics of Prius help create a stunningly smooth ride.A double-wishbone rear suspension combined with the body rigidity and aerodynamics of Prius help create a stunningly smooth ride.A double-wishbone rear suspension combined with the body rigidity and aerodynamics of Prius help create a stunningly smooth ride.<a href='JavaScript:void(0)' onclick='shorterPerformance();'><i class='fa fa-chevron-up' aria-hidden='true'></i> Show Less</a>"
}

function shorterPerformance() {
    document.getElementById("extra_performance_detail").innerHTML = "A double-wishbone rear suspension combined with the body rigidity and aerodynamics of Prius help create a stunningly smooth ride.<a href='JavaScript:void(0)' onclick='expandPerformance();'><i class='fa fa-chevron-down' aria-hidden='true'></i>Learn More</a>";
}

function expandTechnology() {
    document.getElementById("technology_extra_text").innerHTML = 'Available features like Qi-compatible wireless smartphone charging 23 and Intelligent Clearance Sonar (ICS) 12 help you get more fun from every drive.Available features like Qi-compatible wireless smartphone charging 23 and Intelligent Clearance Sonar (ICS) 12 help you get more fun from every drive.Available features like Qi-compatible wireless smartphone charging 23 and Intelligent Clearance Sonar (ICS) 12 help you get more fun from every drive.<br /><a href="JavaScript:void(0)" onclick="shorterTechnology()"><i class="fa fa-chevron-up" aria-hidden="true"></i> Show Less</a>';
}

function shorterTechnology() {
    document.getElementById("technology_extra_text").innerHTML = 'Available features like Qi-compatible wireless smartphone charging 23 and Intelligent Clearance Sonar (ICS) 12 help you get more fun from every drive.<br /><a href="JavaScript:void(0)" onclick="expandTechnology()"><i class="fa fa-chevron-down" aria-hidden="true"></i> Learn More</a>';
}