function sampleWords(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)

  return arr[randomIndex]
}

function generateTrashTalk(occupation) {
  const target = ['工程師', '設計師', '創業家']
  const task = {
    engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // generate trash talk based on the selection
  let trashTalk = ''

  if (occupation === 'engineer') {
    trashTalk = `身為一個${target[0]}，${sampleWords(task.engineer)}，${sampleWords(phrase)}吧！`
  }

  if (occupation === 'designer') {
    trashTalk = `身為一個${target[1]}，${sampleWords(task.designer)}，${sampleWords(phrase)}吧！`
  }

  if (occupation === 'entrepreneur') {
    trashTalk = `身為一個${target[2]}，${sampleWords(task.entrepreneur)}，${sampleWords(phrase)}吧！`
  }

  return trashTalk
}

module.exports = generateTrashTalk