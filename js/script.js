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

  const handleStoreAvailableItems = ()=>{
    const avail = document.getElementById("avail")
    const ordered = document.getElementById("ordered")
    const delivered = document.getElementById("delivered")
    const moveactive = document.getElementById("moveactive")
    // const pop_up = document.getElementById("pop-up")

    avail.classList.add("visible")
    avail.classList.remove("hidden")
    ordered.classList.remove("visible")
    ordered.classList.add("hidden")
    delivered.classList.remove("visible")
    delivered.classList.add("hidden")
    moveactive.classList.remove("movestoreactive")
    moveactive.classList.remove("movedelivereactive")
  }


  const handleStoreOrderedItems= ()=>{
    const avail = document.getElementById("avail")
    const ordered = document.getElementById("ordered")
    const delivered = document.getElementById("delivered")
    const moveactive = document.getElementById("moveactive")
    // const pop_up = document.getElementById("pop-up")

    avail.classList.add("hidden")
    ordered.classList.add("visible")
    ordered.classList.remove("hidden")
    delivered.classList.remove("visible")
    delivered.classList.add("hidden")
    moveactive.classList.add("movestoreactive")
    moveactive.classList.remove("movedelivereactive")
  }

  const handleStoreDeliveredItems= ()=>{
    const avail = document.getElementById("avail")
    const ordered = document.getElementById("ordered")
    const delivered = document.getElementById("delivered")
    const moveactive = document.getElementById("moveactive")
    // const pop_up = document.getElementById("pop-up")

    avail.classList.add("hidden")
    delivered.classList.add("visible")
    delivered.classList.remove("hidden")
    ordered.classList.remove("visible")
    ordered.classList.add("hidden")
    moveactive.classList.remove("movestoreactive")
    moveactive.classList.add("movedelivereactive")
  }

  const handleMediaView = ()=>{
    const mediaView = document.getElementById("media_view")
    const giving = document.getElementById("giving")
    const attendance = document.getElementById("attendance")
    const prayer = document.getElementById("prayer")
    const media = document.getElementById("media")
    const give = document.getElementById("give")
    const attend = document.getElementById("attend")
    const request = document.getElementById("request")
    // const pop_up = document.getElementById("pop-up")

    mediaView.classList.add("visible")
    mediaView.classList.remove("hidden")
    giving.classList.add("hidden")
    giving.classList.remove("visible")
    attendance.classList.remove("visible")
    attendance.classList.add("hidden")
    prayer.classList.remove("visible")
    prayer.classList.add("hidden")
    media.classList.add("text-purple-500")
    give.classList.remove("text-purple-500")
    attend.classList.remove("text-purple-500")
    request.classList.remove("text-purple-500")
  }

  const handleGive = ()=>{
    const mediaView = document.getElementById("media_view")
    const giving = document.getElementById("giving")
    const attendance = document.getElementById("attendance")
    const prayer = document.getElementById("prayer")
    const media = document.getElementById("media")
    const give = document.getElementById("give")
    const attend = document.getElementById("attend")
    const request = document.getElementById("request")
    // const pop_up = document.getElementById("pop-up")

    mediaView.classList.remove("visible")
    mediaView.classList.add("hidden")
    giving.classList.add("visible")
    giving.classList.remove("hidden")
    attendance.classList.remove("visible")
    attendance.classList.add("hidden")
    prayer.classList.remove("visible")
    prayer.classList.add("hidden")
    media.classList.remove("text-purple-500")
    give.classList.add("text-purple-500")
    attend.classList.remove("text-purple-500")
    request.classList.remove("text-purple-500")
  }

  const handleAttendance = ()=>{
    const mediaView = document.getElementById("media_view")
    const giving = document.getElementById("giving")
    const attendance = document.getElementById("attendance")
    const prayer = document.getElementById("prayer")
    const media = document.getElementById("media")
    const give = document.getElementById("give")
    const attend = document.getElementById("attend")
    const request = document.getElementById("request")
    // const pop_up = document.getElementById("pop-up")

    mediaView.classList.remove("visible")
    mediaView.classList.add("hidden")
    giving.classList.remove("visible")
    giving.classList.add("hidden")
    attendance.classList.add("visible")
    attendance.classList.remove("hidden")
    prayer.classList.remove("visible")
    prayer.classList.add("hidden")
    media.classList.remove("text-purple-500")
    give.classList.remove("text-purple-500")
    attend.classList.add("text-purple-500")
    request.classList.remove("text-purple-500")
  }

  const handlePrayerRequest = ()=>{
    const mediaView = document.getElementById("media_view")
    const giving = document.getElementById("giving")
    const attendance = document.getElementById("attendance")
    const prayer = document.getElementById("prayer")
    const media = document.getElementById("media")
    const give = document.getElementById("give")
    const attend = document.getElementById("attend")
    const request = document.getElementById("request")
    // const pop_up = document.getElementById("pop-up")

    mediaView.classList.remove("visible")
    mediaView.classList.add("hidden")
    giving.classList.remove("visible")
    giving.classList.add("hidden")
    attendance.classList.remove("visible")
    attendance.classList.add("hidden")
    prayer.classList.add("visible")
    prayer.classList.remove("hidden")
    media.classList.remove("text-purple-500")
    give.classList.remove("text-purple-500")
    attend.classList.remove("text-purple-500")
    request.classList.add("text-purple-500")
  }

  const handleProfile = ()=>{
    const profile = document.getElementById("profile")
    const users = document.getElementById("users")
    const location = document.getElementById("location")
    const account = document.getElementById("account")
    const badges = document.getElementById("badges")
    const input = document.getElementById("input")
    const pro = document.getElementById("pro")
    const use = document.getElementById("use")
    const loc = document.getElementById("loc")
    const acc = document.getElementById("acc")
    const bad = document.getElementById("bad")
    const inp = document.getElementById("inp")
    
    // const pop_up = document.getElementById("pop-up")

    profile.classList.add("visible")
    profile.classList.remove("hidden")
    users.classList.remove("visible")
    users.classList.add("hidden")
    location.classList.remove("visible")
    location.classList.add("hidden")
    account.classList.remove("visible")
    account.classList.add("hidden")
    badges.classList.remove("visible")
    badges.classList.add("hidden")
    input.classList.remove("visible")
    input.classList.add("hidden")
    use.classList.remove("text-purple-500")
    loc.classList.remove("text-purple-500")
    acc.classList.remove("text-purple-500")
    bad.classList.remove("text-purple-500")
    inp.classList.remove("text-purple-500")
    pro.classList.add("text-purple-500")
  }

  const handleUsers = ()=>{
    const profile = document.getElementById("profile")
    const users = document.getElementById("users")
    const location = document.getElementById("location")
    const account = document.getElementById("account")
    const badges = document.getElementById("badges")
    const input = document.getElementById("input")
    const pro = document.getElementById("pro")
    const use = document.getElementById("use")
    const loc = document.getElementById("loc")
    const acc = document.getElementById("acc")
    const bad = document.getElementById("bad")
    const inp = document.getElementById("inp")
    
    // const pop_up = document.getElementById("pop-up")

    profile.classList.remove("visible")
    profile.classList.add("hidden")
    users.classList.add("visible")
    users.classList.remove("hidden")
    location.classList.remove("visible")
    location.classList.add("hidden")
    account.classList.remove("visible")
    account.classList.add("hidden")
    badges.classList.remove("visible")
    badges.classList.add("hidden")
    input.classList.remove("visible")
    input.classList.add("hidden")
    pro.classList.remove("text-purple-500")
    use.classList.add("text-purple-500")
    loc.classList.remove("text-purple-500")
    acc.classList.remove("text-purple-500")
    bad.classList.remove("text-purple-500")
    inp.classList.remove("text-purple-500")
  }

  const handleLocation = ()=>{
    const profile = document.getElementById("profile")
    const users = document.getElementById("users")
    const location = document.getElementById("location")
    const account = document.getElementById("account")
    const badges = document.getElementById("badges")
    const input = document.getElementById("input")
    const pro = document.getElementById("pro")
    const use = document.getElementById("use")
    const loc = document.getElementById("loc")
    const acc = document.getElementById("acc")
    const bad = document.getElementById("bad")
    const inp = document.getElementById("inp")
    
    // const pop_up = document.getElementById("pop-up")

    profile.classList.remove("visible")
    profile.classList.add("hidden")
    users.classList.remove("visible")
    users.classList.add("hidden")
    location.classList.add("visible")
    location.classList.remove("hidden")
    account.classList.remove("visible")
    account.classList.add("hidden")
    badges.classList.remove("visible")
    badges.classList.add("hidden")
    input.classList.remove("visible")
    input.classList.add("hidden")
    pro.classList.remove("text-purple-500")
    use.classList.remove("text-purple-500")
    loc.classList.add("text-purple-500")
    acc.classList.remove("text-purple-500")
    bad.classList.remove("text-purple-500")
    inp.classList.remove("text-purple-500")
  }

  const handleAccount = ()=>{
    const profile = document.getElementById("profile")
    const users = document.getElementById("users")
    const location = document.getElementById("location")
    const account = document.getElementById("account")
    const badges = document.getElementById("badges")
    const input = document.getElementById("input")
    const pro = document.getElementById("pro")
    const use = document.getElementById("use")
    const loc = document.getElementById("loc")
    const acc = document.getElementById("acc")
    const bad = document.getElementById("bad")
    const inp = document.getElementById("inp")
    
    // const pop_up = document.getElementById("pop-up")

    profile.classList.remove("visible")
    profile.classList.add("hidden")
    users.classList.remove("visible")
    users.classList.add("hidden")
    location.classList.remove("visible")
    location.classList.add("hidden")
    account.classList.add("visible")
    account.classList.remove("hidden")
    badges.classList.remove("visible")
    badges.classList.add("hidden")
    input.classList.remove("visible")
    input.classList.add("hidden")
    pro.classList.remove("text-purple-500")
    use.classList.remove("text-purple-500")
    loc.classList.remove("text-purple-500")
    acc.classList.add("text-purple-500")
    bad.classList.remove("text-purple-500")
    inp.classList.remove("text-purple-500")
  }

  const handleBagdes = ()=>{
    const profile = document.getElementById("profile")
    const users = document.getElementById("users")
    const location = document.getElementById("location")
    const account = document.getElementById("account")
    const badges = document.getElementById("badges")
    const input = document.getElementById("input")
    const pro = document.getElementById("pro")
    const use = document.getElementById("use")
    const loc = document.getElementById("loc")
    const acc = document.getElementById("acc")
    const bad = document.getElementById("bad")
    const inp = document.getElementById("inp")
    
    // const pop_up = document.getElementById("pop-up")

    profile.classList.remove("visible")
    profile.classList.add("hidden")
    users.classList.remove("visible")
    users.classList.add("hidden")
    location.classList.remove("visible")
    location.classList.add("hidden")
    account.classList.remove("visible")
    account.classList.add("hidden")
    badges.classList.add("visible")
    badges.classList.remove("hidden")
    input.classList.remove("visible")
    input.classList.add("hidden")
    pro.classList.remove("text-purple-500")
    use.classList.remove("text-purple-500")
    loc.classList.remove("text-purple-500")
    acc.classList.remove("text-purple-500")
    bad.classList.add("text-purple-500")
    inp.classList.remove("text-purple-500")
  }

  const handleInput = ()=>{
    const profile = document.getElementById("profile")
    const users = document.getElementById("users")
    const location = document.getElementById("location")
    const account = document.getElementById("account")
    const badges = document.getElementById("badges")
    const input = document.getElementById("input")
    const pro = document.getElementById("pro")
    const use = document.getElementById("use")
    const loc = document.getElementById("loc")
    const acc = document.getElementById("acc")
    const bad = document.getElementById("bad")
    const inp = document.getElementById("inp")
    
    // const pop_up = document.getElementById("pop-up")

    profile.classList.remove("visible")
    profile.classList.add("hidden")
    users.classList.remove("visible")
    users.classList.add("hidden")
    location.classList.remove("visible")
    location.classList.add("hidden")
    account.classList.remove("visible")
    account.classList.add("hidden")
    badges.classList.remove("visible")
    badges.classList.add("hidden")
    input.classList.add("visible")
    input.classList.remove("hidden")
    pro.classList.remove("text-purple-500")
    use.classList.remove("text-purple-500")
    loc.classList.remove("text-purple-500")
    acc.classList.remove("text-purple-500")
    bad.classList.remove("text-purple-500")
    inp.classList.add("text-purple-500")
  }