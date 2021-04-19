// require('dotenv').config();
const axios = require('./axios-config');

const quranData = {};

const asyncAll = async () => {
  // +++++++++++++++++++ Surah 1 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/1:1/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/1:2/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/1:3/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/1:4/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/1:5/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/1:6/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/1:7/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['1'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['1'].en.push(response[0]);
        quranData['1'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['1'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 2 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/2:201/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/2:250/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/2:285/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/2:286/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['2'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['2'].en.push(response[0]);
        quranData['2'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['2'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 3 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/3:8/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:9/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:16/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:38/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:53/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:147/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:191/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:192/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:193/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:194/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['3'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['3'].en.push(response[0]);
        quranData['3'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['3'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 5 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/5:83/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      quranData['5'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['5'].en.push(response[0]);
        quranData['5'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['5'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 7 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/7:23/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/7:47/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/7:126/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['7'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['7'].en.push(response[0]);
        quranData['7'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['7'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 10 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/10:85/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/10:86/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['10'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['10'].en.push(response[0]);
        quranData['10'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['10'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 11 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/11:47/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      quranData['11'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['11'].en.push(response[0]);
        quranData['11'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['11'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 12 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/12:101/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      quranData['12'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['12'].en.push(response[0]);
        quranData['12'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['12'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 14 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/14:35/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/14:40/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/14:41/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['14'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['14'].en.push(response[0]);
        quranData['14'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['14'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 17 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/17:24/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/17:80/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['17'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['17'].en.push(response[0]);
        quranData['17'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['17'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 18 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/18:10/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      quranData['18'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['18'].en.push(response[0]);
        quranData['18'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['18'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 20 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/20:25/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/20:26/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/20:114/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['20'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['20'].en.push(response[0]);
        quranData['20'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['20'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 21 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/21:83/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/21:87/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['21'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['21'].en.push(response[0]);
        quranData['21'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['21'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 23 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/23:29/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/23:94/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/23:97/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/23:98/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/23:109/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/23:118/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['23'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['23'].en.push(response[0]);
        quranData['23'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['23'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 25 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/25:65/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/25:74/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['25'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['25'].en.push(response[0]);
        quranData['25'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['25'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 26 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/26:80/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/26:83/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/26:84/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/26:85/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/26:86/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/26:87/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/26:88/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/26:89/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['26'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['26'].en.push(response[0]);
        quranData['26'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['26'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 27 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/27:19/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      quranData['27'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['27'].en.push(response[0]);
        quranData['27'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['27'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 28 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/28:16/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/28:17/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/28:21/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/28:24/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['28'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['28'].en.push(response[0]);
        quranData['28'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['28'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 29 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/29:30/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      quranData['29'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['29'].en.push(response[0]);
        quranData['29'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['29'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 35 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/35:34/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      quranData['35'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['35'].en.push(response[0]);
        quranData['35'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['35'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 37 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/37:100/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      quranData['37'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['37'].en.push(response[0]);
        quranData['37'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['37'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 40 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/40:7/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/40:8/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/40:9/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['40'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['40'].en.push(response[0]);
        quranData['40'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['40'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 44 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/44:12/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      quranData['44'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['44'].en.push(response[0]);
        quranData['44'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['44'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 46 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/46:15/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      quranData['46'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['46'].en.push(response[0]);
        quranData['46'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['46'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 59 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/59:10/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      quranData['59'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['59'].en.push(response[0]);
        quranData['59'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['59'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 60 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/60:4/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/60:5/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['60'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['60'].en.push(response[0]);
        quranData['60'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['60'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 66 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/66:8/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/66:9/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/66:10/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/66:11/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['66'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['66'].en.push(response[0]);
        quranData['66'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['66'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 71 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/71:28/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      quranData['71'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['71'].en.push(response[0]);
        quranData['71'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['71'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 112 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/112:1/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/112:2/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/112:3/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/112:4/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['112'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['112'].en.push(response[0]);
        quranData['112'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['112'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 113 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/113:1/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/113:2/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/113:3/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/113:4/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/113:5/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['113'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['113'].en.push(response[0]);
        quranData['113'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['113'] = {
        err,
      };
    });

  // +++++++++++++++++++ Surah 114 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/114:1/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/114:2/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/114:3/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/114:4/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/114:5/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/114:6/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      quranData['114'] = {
        en: [],
        ur: [],
      };
      res.forEach((el) => {
        const response = el.data.data;
        quranData['114'].en.push(response[0]);
        quranData['114'].ur.push(response[1]);
      });
    })
    .catch((err) => {
      quranData['114'] = {
        err,
      };
    });

  return quranData;
};

module.exports = asyncAll;
