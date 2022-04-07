<template>
  <div class="my-auto">
    <h3 class="mx-1">Login</h3>
    <v-form>
      <v-text-field
        prepend-icon="mdi-account"
        name="login"
        label="Login"
        type="text"
      ></v-text-field>
      <v-text-field
        id="password"
        prepend-icon="mdi-lock"
        name="password"
        label="Password"
        type="password"
      ></v-text-field>
    </v-form>
    <v-spacer></v-spacer>
    <v-btn class="accent" to="/" block>Login</v-btn>
  </div>
</template>
