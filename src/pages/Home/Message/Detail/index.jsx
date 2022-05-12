import React, {Component} from 'react';

const DetailData = [
  {id:'01',content:'hi，🍕'},
  {id:'02',content:'hi，now'},
  {id:'03',content:'hi，future'}
]

export default class Detail extends Component {

  render() {
    console.log(this.props)
    const {id, title} = this.props.location.state || {}
    const findResult = DetailData.find((detailObj) => {
      return detailObj.id === id
    }) || {}
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findResult.content}</li>
        </ul>
      </div>
    );
  }
}
