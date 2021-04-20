const axios = require('./helpers/axios-config');

const quranData = [];

const createId = (res) => res.data.data[0].surah.number;

const successResponse = (res) => {
  const id = createId(res[0]);
  const data = {
    id,
    en: [],
    ur: [],
  };
  res.forEach((el) => {
    const response = el.data.data;
    data.en.push(response[0]);
    data.ur.push(response[1]);
  });
  quranData.push(data);
};

const errorResponse = (err) => {
  const error = {};
  if (err.response) {
    error.data = err.response.data;
  } else if (error.request) {
    error.data = err.request;
  } else {
    error.data = err.message;
  }
  return error;
};

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
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 2 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/2:201/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/2:250/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/2:285/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/2:286/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
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
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 5 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/5:83/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 7 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/7:23/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/7:47/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/7:126/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });
  // +++++++++++++++++++ Surah 10 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/10:85/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/10:86/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // // +++++++++++++++++++ Surah 11 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/11:47/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 12 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/12:101/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 14 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/14:35/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/14:40/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/14:41/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 17 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/17:24/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/17:80/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 18 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/18:10/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 20 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/20:25/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/20:26/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/20:114/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 21 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/21:83/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/21:87/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
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
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 25 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/25:65/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/25:74/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
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
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 27 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/27:19/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 28 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/28:16/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/28:17/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/28:21/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/28:24/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 29 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/29:30/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 35 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/35:34/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 37 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/37:100/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 40 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/40:7/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/40:8/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/40:9/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 44 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/44:12/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 46 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/46:15/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 59 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/59:10/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 60 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/60:4/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/60:5/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 66 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/66:8/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/66:9/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/66:10/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/66:11/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 71 +++++++++++++++++++
  await Promise.all([axios.get('/ayah/71:28/editions/en.sahih,ur.ahmedali')])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  // +++++++++++++++++++ Surah 112 +++++++++++++++++++
  await Promise.all([
    axios.get('/ayah/112:1/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/112:2/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/112:3/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/112:4/editions/en.sahih,ur.ahmedali'),
  ])
    .then((res) => {
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
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
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
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
      successResponse(res);
    })
    .catch((err) => {
      errorResponse(err);
    });

  return quranData;
};

module.exports = asyncAll;
