import React from "react";
import "./App.css";
import { Paper } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { Checkbox } from "@mantine/core";
import { Button } from "@mantine/core";
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <div>
      <h><b>VisioMark</b></h>
    <Paper p="lg" >
      <p><b>Create my account</b></p>
      <p>fill in the details and we can create your account</p>
      <TextInput shadow="xs"
      placeholder="Username"
      //label="Username"
      //description="filling with your user name"
      //error="wrong information"
      //withAsterisk
      />
      <br/>
      <TextInput
      placeholder="@Email"
      //label="Username"
      //description="filling with your user name"
      //error="wrong information"
      //withAsterisk
      />
      <br/>
      <PasswordInput
      placeholder="Password" //label="Password" //description="Password must include at least one letter, number and special character" //error="wrong" //withAsterisk
      />
      <br/>
      <PasswordInput
      placeholder="Confirm Password" //label="Password" //description="Password must include at least one letter, number and special character" //error="wrong" //withAsterisk 
      />
      <br/>
      <Checkbox label="I agree to the terms and conditions" mt="xl" size="md" />
      <br/>
      <Button fullWidth mt="xl" size="md">
          Create my account
        </Button>
    </Paper>
    </div>
  );
}

export default App;
