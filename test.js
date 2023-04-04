const  { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.argv.slice(2)
});
const openai = new OpenAIApi(configuration);

setTimeout(async () => {
    // console.log('开始请求...')
    // console.log(`key:  ${process.argv.slice(2)}`)
    // const completion = await openai.createCompletion({
    //     model: "text-davinci-003",
    //     prompt: generatePrompt('cat'),
    //     temperature: 0.6,
    //   }).then(res => {
    //     console.log(`响应：${res}`)
    //     console.log(`响应：${res.data.choices[0].text}`)
    //   }).catch(err => {
    //     console.log(`错误：${err}`)
    //   });
    openai.ChatCompletion({
        model:"gpt-3.5-turbo",
        messages:[
              {"role": "system", "content": "You are a helpful assistant."},
              {"role": "user", "content": "Who won the world series in 2020?"},
              {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
              {"role": "user", "content": "Where was it played?"}
          ]
        }).then(res=>{
        console.log(res['choices'][0]['message']['content'],JSON.stringify(res),'响应')
      })
}, 2000)


function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}