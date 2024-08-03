// const _ = require("lodash");
//
//
const str =
  "/api/v1/setting/category/update/dkjashgduyfagfiasyf/dfsajhfgkjhasg/djhasgdkjhas/djahsgfdjhasfg/dksajhgfdkasf";
const man = {
  name: "sam",
  phone: 09903334703,
  group: [
    {
      name: "folan1",
      number: 0,
      permissions: [
        {
          name: "per1",
          funcname: "update",
          prefixname: "category",
          servicename: "setting",
        },
      ],

      autoApprove: {
        type: Boolean,
      },
    },
    {
      name: "folan2",
      number: 0,
      permissions: [
        {
          name: "per9",
          funcname: "create",
          prefixname: "abdola",
          servicename: "setting",
        },
        {
          name: "per4",
          funcname: "create",
          prefixname: "category",
          servicename: "auth",
        },
      ],

      autoApprove: {
        type: Boolean,
      },
    },
  ],
};

const check = async (user, url) => {
  const str = url.substring(8);
  const result = str.match(/\w+/g); //[ 'setting', 'category', 'create' ]
  console.log("result", result);
  let equal = false;

  for (let index = 0; index < user.group.length; index++) {
    const element = user.group[index];
    for (let index = 0; index < element.permissions.length; index++) {
      let count = 1;
      const elem = element.permissions[index];
      const e = [elem.servicename, elem.prefixname, elem.funcname];

      const eq = await _.isEqual(result.slice(0, 3), e);

      if (eq) {
        equal = true;
      }

      count++;
    }
  }

  if (equal) {
    console.log("NEXT");
  } else {
    console.log("FOSHE");
  }
};

check(man, str);
//
