import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

const Example = () => (
  <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>

    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>

      </Comment.Content>
    </Comment>

   

    <Form reply>
      Write Comment:
      <input style={{height: '45px', marginBottom: "15px", placeholder: "Write Comment"}}/>
      <Button content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
)

export default Example
