const rootEndpoint = "http://plato.mrl.ai:8080/";

export async function fetchContacts() {
  const response = await fetch(rootEndpoint + "contacts", {
    method: "GET",
    headers: {
      API: "jones",
    },
  });
  const json = await response.json();
  const contacts = json["contacts"];

  contacts.map(async (contact, index) => {
    // const url = await fetchProfileURL(contact.number);
    // contacts[index].profilePic = url;
    console.log(contact);
  });
  // console.log("API_CONTACTS:" + contacts.length);

  return contacts;
}

export async function getProfile() {
  const response = await fetch(rootEndpoint + "profile", {
    method: "GET",
    headers: {
      API: "jones",
    },
  });
  const json = await response.json();
  return json;
}

export async function isAuthenticated() {
  const response = await fetch(rootEndpoint, {
    method: "GET",
    headers: {
      API: "jones",
    },
  });
  return response["Authentication"] != "invalid";
}

export async function removeContact(index) {
  const response = await fetch(rootEndpoint + "contacts/remove", {
    method: "POST",
    headers: {
      API: "jones",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      position: index,
    }),
  });
  return response.json();
}

export async function addContact(name, number) {
  const response = await fetch(rootEndpoint + "contacts/add", {
    method: "POST",
    headers: {
      API: "jones",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      number: number,
    }),
  });
  return response.json();
}

//Not using this for now.
export async function fetchProfileURL(handle) {
  const url = "https://www.instagram.com/thechrisjones_/?__a=1";
  const response = await fetch(url);
  const json = await response.json();

  //Loop through the nested json data until we get to the URL for Instagram.
  let instaURL = json;
  const keys = ["graphql", "user", "profile_pic_url_hd"];
  keys.map((key) => {
    if (instaURL[key]) {
      instaURL = instaURL[key];
    } else {
      console.log("default");
      return "";
    }
  });
  console.log("default");
  return instaURL;
}
