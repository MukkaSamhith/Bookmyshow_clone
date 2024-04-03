const express = require('express')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const cors = require('cors')
const path = require('path')

const databasePath = path.join(__dirname, 'mydb.db')

const app = express()

app.use(express.json())
app.use(cors())
let database = null

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    })

    app.listen(3005, () =>
      console.log('Server Running at http://localhost:3005/'),
    )
  } catch (error) {
    console.log(`DB Error: ${error.message}`)
    process.exit(1)
  }
}

initializeDbAndServer()

app.get('/hollywood',async(request,response)=>{
    const q = `
    SELECT *
    FROM hollywood;
    `
    const o = request.query
    /*const t=`
    SELECT *
    FROM Hollywood
    WHERE movie_name LIKE '${o}'
    `*/
    const y = await database.all(q);
    response.send(y);
})

app.get('/hollywood/:id/',async(request,reponse)=>{
    const {id} = request.params
    const q1 = `
    SELECT *
    FROM hollywood
    WHERE movie_id=${id};`
    const h = await database.get(q1);
    reponse.send(h);
})



app.post('/hollywood/',async(request,response)=>{
  const detials = request.body;
  const {n1,n2,n3,n4,n5,n6,n7,n8} = detials;
  const x = `
  INSERT INTO hollywood(movie_name,movie_id,director_name ,producer_name,actors,budget,movie_url,movie_coverpage)
  VALUES
  (
    '${n1}',
    ${n2},
    '${n3}',
    '${n4}',
    '${n5}',
    ${n6},
    '${n7}',
    '${n8}'
  )`;
  await database.run(x)
  response.send("response")
})

app.delete('/hollywood/:id/',async(req,res)=>{
  const {id} = req.params
  const x=`
  DELETE FROM Hollywood
  WHERE movie_id = ${id};
  `
  await database.run(x)
})

app.delete('/bollywood/:id/',async(req,res)=>{
  const {id} = req.params
  const x=`
  DELETE FROM Bollywood
  WHERE movie_id = ${id};
  `
  await database.run(x)
})


app.post('/hollywood/',async(request,response)=>{
  const detials = request.body;
  const {n1,n2,n3,n4,n5,n6} = detials;
  const x = `
  UPDATE Hollywood
  SET movie_name=CASE
    WHEN '${n1}'<>'' THEN '${n1}'
    ELSE movie_name
    END,
    director_name=CASE
    WHEN '$${n3}'<>'' THEN '${n3}'
    ELSE director_name
    END,
    producer_name = CASE
    WHEN '${n4}' <> '' THEN '${n4}'
    ELSE producer_name
    END,
    actors = CASE
    WHEN '${n5}'<>'' THEN '${n5}'
    ELSE actors
    END,
    budget = CASE
    WHEN ${n6}<>0 THEN ${n6}
    ELSE budget
    END
  WHERE movie_id=${n2};
  `

  await database.run(x)
  response.send("response")
})

app.get('/bollywood',async(request,response)=>{
    const q = `
    SELECT *
    FROM bollywood;
    `
    const y = await database.all(q);
    response.send(y);
})

app.get('/bollywood/:id/',async(request,reponse)=>{
    const {id} = request.params
    const q1 = `
    SELECT *
    FROM bollywood
    WHERE movie_id=${id};`
    const h = await database.get(q1);
    reponse.send(h);
})

app.post('/bollywood/',async(request,response)=>{
    const detials = request.body;
    const {n1,n2,n3,n4,n5,n6,n7,n8} = detials;
    const x = `
    INSERT INTO bollywood(movie_name,movie_id,director_name ,producer_name,actors,budget,movie_url,movie_coverpage)
    VALUES
    (
      '${n1}',
      ${n2},
      '${n3}',
      '${n4}',
      '${n5}',
      ${n6},
      '${n7}',
      '${n8}'
    )`;
    await database.run(x)
    response.send("response")
  })

  app.post('/bollywood/',async(request,response)=>{
    const detials = request.body;
    const {n1,n2,n3,n4,n5,n6} = detials;
    const x = `
    UPDATE Bollywood
    SET movie_name=CASE
      WHEN '${n1}'<>'' THEN '${n1}'
      ELSE movie_name
      END,
      director_name=CASE
      WHEN '$${n3}'<>'' THEN '${n3}'
      ELSE director_name
      END,
      producer_name = CASE
      WHEN '${n4}' <> '' THEN '${n4}'
      ELSE producer_name
      END,
      actors = CASE
      WHEN '${n5}'<>'' THEN '${n5}'
      ELSE actors
      END,
      budget = CASE
      WHEN ${n6}<>0 THEN ${n6}
      ELSE budget
      END
    WHERE movie_id=${n2};
    `
  
    await database.run(x)
    response.send("response")
  })


app.get('/tollywood',async(request,response)=>{
    const q = `
    SELECT *
    FROM tollywood;
    `
    const y = await database.all(q);
    response.send(y);
})

app.get('/tollywood/:id/',async(request,reponse)=>{
    const {id} = request.params
    const q1 = `
    SELECT *
    FROM tollywood
    WHERE movie_id=${id};`
    const h = await database.get(q1);
    reponse.send(h);
})

app.post('/tollywood/',async(request,response)=>{
    const detials = request.body;
    const {n1,n2,n3,n4,n5,n6,n7,n8} = detials;
    const x = `
    INSERT INTO tollywood(movie_name,movie_id,director_name ,producer_name,actors,budget,movie_url,movie_coverpage)
    VALUES
    (
      '${n1}',
      ${n2},
      '${n3}',
      '${n4}',
      '${n5}',
      ${n6},
      '${n7}',
      '${n8}'
    )`;
    await database.run(x)
    response.send("response")
  })

  app.post('/tollywood/',async(request,response)=>{
    const detials = request.body;
    const {n1,n2,n3,n4,n5,n6} = detials;
    const x = `
    UPDATE Tollywood
    SET movie_name=CASE
      WHEN '${n1}'<>'' THEN '${n1}'
      ELSE movie_name
      END,
      director_name=CASE
      WHEN '$${n3}'<>'' THEN '${n3}'
      ELSE director_name
      END,
      producer_name = CASE
      WHEN '${n4}' <> '' THEN '${n4}'
      ELSE producer_name
      END,
      actors = CASE
      WHEN '${n5}'<>'' THEN '${n5}'
      ELSE actors
      END,
      budget = CASE
      WHEN ${n6}<>0 THEN ${n6}
      ELSE budget
      END
    WHERE movie_id=${n2};
    `
  
    await database.run(x)
    response.send("response")
  })

app.post('/hollywood/seats/:id/',async(req,res)=>{
  const {id} = req.params
  const s = req.body
  const {is1,is2,is3,is4,is5,is6,is7,is8,is9,is10,is11,is12,is13,is14,is15,is16,is17,is18,is19,is20,is21,is22,is23,is24,is25,is26,is27,is28,is29,is30,is31,is32,is33,is34,is35,is36,is37,is38,is39,is40,is41,is42,is43,is44,is45,is46,is47,is48,is49,is50} = s
  const p = `
  UPDATE Seats1
  SET seat1=${is1},seat2=${is2},seat3=${is3},seat4=${is4},seat5=${is5},seat6=${is6},seat7=${is7},seat8=${is8},seat9=${is9},seat10=${is10},seat11=${is11},seat12=${is12},seat13=${is13},seat14=${is14},seat15=${is15},seat16=${is16},seat17=${is17},seat18=${is18},seat19=${is19},seat20=${is20},seat21=${is21},seat22=${is22},seat23=${is23},seat24=${is24},seat25=${is25},seat26=${is26},seat27=${is27},seat28=${is28},seat29=${is29},seat30=${is30},seat31=${is31},seat32=${is32},seat33=${is33},seat34=${is34},seat35=${is35},seat36=${is36},seat37=${is37},seat38=${is38},seat39=${is39},seat40=${is40},seat41=${is41},seat42=${is42},seat43=${is43},seat44=${is44},seat45=${is45},seat46=${is46},seat47=${is47},seat48=${is48},seat49=${is49},seat50=${is50}
  WHERE id=${id};
  `
  await database.run(p)
})

app.get('/hollywood/seats/:id',async(req,res)=>{
  const {id}  = req.params
  const q = `
  SELECT *
  FROM Seats1
  WHERE id=${id};
  `
  const h = await database.all(q)
  console.log(h)
  res.send(h)
})

app.post('/bollywood/seats/:id/',async(req,res)=>{
  const {id} = req.params
  const s = req.body
  const {is1,is2,is3,is4,is5,is6,is7,is8,is9,is10,is11,is12,is13,is14,is15,is16,is17,is18,is19,is20,is21,is22,is23,is24,is25,is26,is27,is28,is29,is30,is31,is32,is33,is34,is35,is36,is37,is38,is39,is40,is41,is42,is43,is44,is45,is46,is47,is48,is49,is50} = s
  const p = `
  UPDATE Seats2
  SET seat1=${is1},seat2=${is2},seat3=${is3},seat4=${is4},seat5=${is5},seat6=${is6},seat7=${is7},seat8=${is8},seat9=${is9},seat10=${is10},seat11=${is11},seat12=${is12},seat13=${is13},seat14=${is14},seat15=${is15},seat16=${is16},seat17=${is17},seat18=${is18},seat19=${is19},seat20=${is20},seat21=${is21},seat22=${is22},seat23=${is23},seat24=${is24},seat25=${is25},seat26=${is26},seat27=${is27},seat28=${is28},seat29=${is29},seat30=${is30},seat31=${is31},seat32=${is32},seat33=${is33},seat34=${is34},seat35=${is35},seat36=${is36},seat37=${is37},seat38=${is38},seat39=${is39},seat40=${is40},seat41=${is41},seat42=${is42},seat43=${is43},seat44=${is44},seat45=${is45},seat46=${is46},seat47=${is47},seat48=${is48},seat49=${is49},seat50=${is50}
  WHERE id=${id};
  `
  await database.run(p)
})

app.get('/bollywood/seats/:id',async(req,res)=>{
  const {id}  = req.params
  const q = `
  SELECT *
  FROM Seats2
  WHERE id=${id};
  `
  const h = await database.all(q)
  console.log(h)
  res.send(h)
})