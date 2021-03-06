import React from "react";
import { Image, Card, Icon, Button } from "semantic-ui-react";

const ActivityDetails = () => {
  return (
    <Card fluid>
      <Image src="/assets/placeholder.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Title</Card.Header>
        <Card.Meta>
          <span>Date</span>
        </Card.Meta>
        <Card.Description>
          Description
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
            <Button basic color='blue' content='edit'/>
            <Button basic color='grey' content='cancel'/>
        </Button.Group>
      </Card.Content>
    </Card>
  );
}

export default ActivityDetails;



