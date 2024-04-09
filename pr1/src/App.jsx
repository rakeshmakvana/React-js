import UserProfileCard from "./components/UserProfileCard/UserProfileCard"

function App() {

  let userdata = [{
    profile: 'https://lh4.googleusercontent.com/proxy/N0JybimtauPRh9GntVHC05gOkbgyK4EO4i-p5yeJuYcTq5fqAry1CEZoOUQVTat9es4mWcfQTP9Y1xy2Q1leVP8SbYoWWX8wSQHZLG1gbsUz3hl8iKl4X6qzmn3Jj7yGXw9mHKc79ibgftstcxJDOFKQprgZ',
    name: 'rakesh',
    lname: 'makvana',
    course: 'full stack development',
    dob: 21 - 8 - 2004,
    zender: 'male',
    email: 'rakesh@gmail.com',
    contact: 6478965342,
    addresh: 'varsha soc., varacha road, surat'
  }, {
    profile: 'https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp',
    name: 'raj',
    lname: 'patel',
    course: 'app development',
    dob: 1 - 8 - 2004,
    zender: 'male',
    email: 'raj@gmail.com',
    contact: 3546557689,
    addresh: 'khodiyar soc., ak road, surat'
  }, {
    profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVj1Ya5pY2DS-HklezXY9Ggpq8ML4EOumjxpy-EUDaOQ&s',
    name: 'amit',
    lname: 'shah',
    course: 'game development',
    dob: 2 - 3 - 2002,
    zender: 'male',
    email: 'am@gmail.com',
    contact: 6238965342,
    addresh: 'varj soc., hk road, surat'
  }, {
    profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESgEgkgFa6JBZxS_lIO7glUy3SWRmbfO4K7sTq6_1NA&s',
    name: 'priya',
    lname: 'neel',
    course: 'ui/ux',
    dob: 19 - 1 - 2001,
    zender: 'female',
    email: 'priya@gmail.com',
    contact: 4436789765,
    addresh: 'jeet soc., an circal, surat'
  }, {
    profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxn30bdTnQTbEZiXIRrEoGWNlxv6btnwtRLxaeG3-lDw&s',
    name: 'manshi',
    lname: 'patel',
    course: 'ui/ux',
    dob: 22 - 10 - 2002,
    zender: 'female',
    email: 'mns@gmail.com',
    contact: 9988965342,
    addresh: 'cb soc., kalvad road, ahmedabad'
  }];

  return (
    <>
      {userdata.map((ele) => {
        return <UserProfileCard profile={ele.profile} name={ele.name} lname={ele.lname} course={ele.course} dob={ele.dob} zender={ele.zender} email={ele.email} contact={ele.contact} addresh={ele.addresh} />
      })}
    </>
  )
}

export default App
