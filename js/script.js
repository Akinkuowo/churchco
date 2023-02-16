/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function OpenMenu() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }

  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  const pop_up = document.getElementById("pop-up")
  const popup = () =>{
    pop_up.classList.add("open-popup")
  }

  const handleAbout = ()=>{
    const about = document.getElementById("about")
    const members = document.getElementById("members")
    const moveactive = document.getElementById("moveactive")
    // const pop_up = document.getElementById("pop-up")

    about.classList.add("visible")
    about.classList.remove("hidden")
    members.classList.remove("visible")
    members.classList.add("hidden")
    moveactive.classList.remove("moveactive")
    moveactive.classList.remove("moveactivesetting")
  }

  const handleMembers = ()=>{
    const about = document.getElementById("about")
    const members = document.getElementById("members")
    const settings = document.getElementById("settings")
    const moveactive = document.getElementById("moveactive")
    // const pop_up = document.getElementById("pop-up")

    about.classList.add("hidden")
    members.classList.add("visible")
    members.classList.remove("hidden")
    settings.classList.remove("hidden")
    settings.classList.add("hidden")
    moveactive.classList.add("moveactive") 
    moveactive.classList.remove("moveactivesetting")
  }

  const handleSettings = ()=>{
    const about = document.getElementById("about")
    const settings = document.getElementById("settings")
    const members = document.getElementById("members")
    const moveactive = document.getElementById("moveactive")
    // const pop_up = document.getElementById("pop-up")

    about.classList.add("hidden")
    settings.classList.add("visible")
    members.classList.add("hidden")
    settings.classList.remove("hidden")
    moveactive.classList.add("moveactivesetting")
    moveactive.classList.remove("moveactive")
  }

  const handleCommunities = ()=>{
    const communities = document.getElementById("communities")
    const deletedcommunities  = document.getElementById("deleted-communities")
    const deletedcomm  = document.getElementById("deletedcomm")
    const comm  = document.getElementById("comm")
  

    deletedcommunities.classList.remove("visible")
    deletedcommunities.classList.add("hidden")
    communities.classList.remove("hidden")
    comm.classList.add("text-black")
    deletedcomm.classList.add("text-gray-500")
    deletedcomm.classList.remove("text-black")
    comm.classList.remove("text-gray-500")
    
  }

  const handleUpcomingEvent = () =>{
    const communities = document.getElementById("communities")
    const deletedcommunities  = document.getElementById("deleted-communities")
    const deletedcomm  = document.getElementById("deletedcomm")
    const comm  = document.getElementById("comm")
    const deleted_event  = document.getElementById("deletedevent")
    const deletedevent  = document.getElementById("deleted-event")

    deletedcommunities.classList.remove("visible")
    deletedcommunities.classList.add("hidden")
    deletedevent.classList.remove("visible")
    deletedevent.classList.add("hidden")
    communities.classList.remove("hidden")
    comm.classList.add("text-black")
    deletedcomm.classList.add("text-gray-500")
    deletedcomm.classList.remove("text-black")
    deleted_event.classList.add("text-gray-500")
    deleted_event.classList.remove("text-black")
    comm.classList.remove("text-gray-500")
  }

  const handleDeletedCommunities = ()=>{
    const communities = document.getElementById("communities")
    const deletedcommunities  = document.getElementById("deleted-communities")
    const deletedcomm  = document.getElementById("deletedcomm")
    const comm  = document.getElementById("comm")
   

    deletedcommunities.classList.remove("hidden")
    deletedcommunities.classList.add("visible")
    communities.classList.add("hidden")
    deletedcomm.classList.add("text-black")
    comm.classList.add("text-gray-500")
    comm.classList.remove("text-black")
    deletedcomm.classList.remove("text-gray-500")

    
  }

  const handleAnnouncement = () =>{
    const communities = document.getElementById("communities")
    const deletedcommunities  = document.getElementById("deleted-communities")
    const deletedcomm  = document.getElementById("deletedcomm")
    const comm  = document.getElementById("comm")
    const deleted_event  = document.getElementById("deletedevent")
    const deletedevent  = document.getElementById("deleted-event")

    deletedcommunities.classList.remove("hidden")
    deletedcommunities.classList.add("visible")
    deletedevent.classList.remove("visible")
    deletedevent.classList.add("hidden")
    communities.classList.add("hidden")
    deletedcomm.classList.add("text-black")
    comm.classList.add("text-gray-500")
    comm.classList.remove("text-black")
    deletedcomm.classList.remove("text-gray-500")
    deleted_event.classList.add("text-gray-500")
    deleted_event.classList.remove("text-black")
  }

  const handleDeletedEvents = ()=> {
    const communities = document.getElementById("communities")
    const deletedcommunities  = document.getElementById("deleted-communities")
    const deletedcomm  = document.getElementById("deletedcomm")
    const comm  = document.getElementById("comm")
    const deleted_event  = document.getElementById("deletedevent")
    const deletedevent  = document.getElementById("deleted-event")

    deletedcommunities.classList.remove("visible")
    deletedcommunities.classList.add("hidden")
    communities.classList.add("hidden")
    deletedcomm.classList.add("text-gray-500")
    comm.classList.add("text-gray-500")
    comm.classList.remove("text-black")
    deletedcomm.classList.remove("text-black")
    deleted_event.classList.add("text-black")
    deleted_event.classList.remove("text-gray-500")
    deletedevent.classList.add("visible")
    deletedevent.classList.remove("hidden")
  }

  const handleEventAbout = ()=>{
    const about = document.getElementById("about")
    const settings = document.getElementById("settings")
    const moveactive = document.getElementById("moveactive")
    // const pop_up = document.getElementById("pop-up")

    about.classList.add("visible")
    about.classList.remove("hidden")
    settings.classList.remove("visible")
    settings.classList.add("hidden")
    moveactive.classList.remove("moveactive")
  }


  const handleEventSettings = ()=>{
    const about = document.getElementById("about")
    const settings = document.getElementById("settings")
    const moveactive = document.getElementById("moveactive")
    // const pop_up = document.getElementById("pop-up")

    about.classList.add("hidden")
    settings.classList.add("visible")
    settings.classList.remove("hidden")
    moveactive.classList.add("moveeventactive")
  }
