const nextButtonComponent = () => ({
    init() {
      // Declaration of model variable used to switch models
      const model = document.getElementById('model')
  
      // Gets button into variables and displays them
      const nextButton = document.getElementById('nextbutton')
      nextButton.style.display = 'block'
      const nextButtonTwo = document.getElementById('nextbuttonTwo')
      nextButtonTwo.style.display = 'block'
      const nextButtonThree = document.getElementById('nextbuttonThree')
      nextButtonThree.style.display = 'block'
  
      // Functions to display models based on which button is pressed
      const modelOne = () => {
        model.removeAttribute('gltf-model')
        model.setAttribute('gltf-model', '#leo1')
      }
  
      const modelTwo = () => {
        model.removeAttribute('gltf-model')
        model.setAttribute('gltf-model', '#leo100')
      }
  
      const modelThree = () => {
        model.removeAttribute('gltf-model')
        model.setAttribute('gltf-model', '#leo1000')
      }
  
      nextButton.onclick = modelOne
      nextButtonTwo.onclick = modelTwo
      nextButtonThree.onclick = modelThree
    },
  })
  export {nextButtonComponent}