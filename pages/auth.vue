<template>
  <section class="container">
    <div>
      <h1 class="title">
        firebaseでログイン実装しました!
      </h1><!-- 新規登録に v-if="!isLogin" を追加 -->
      <v-container v-if="!isLogin">
        <v-layout 
          row 
          class="text-xs-center">
          <v-flex 
            xs3 
            style="background-image: url('http://cdn.wallpapersafari.com/7/86/gqiGH7.jpg')">
            <v-card height="500px"/>
          </v-flex>
          <v-flex 
            xs9 
            class="grey lighten-4">
            <v-container 
              style="position: relative;top: 13%;" 
              class="text-xs-center">
              <v-card flat>
                <v-card-title primary-title>
                  <h4>Login</h4>
                </v-card-title>
                <v-form>
                  <v-text-field 
                    v-model="mailAddress" 
                    prepend-icon="person" 
                    name="Mail address" 
                    label="Mail address"/>
                  <v-text-field 
                    v-model="password" 
                    prepend-icon="lock" 
                    name="Password" 
                    label="Password" 
                    type="password"/>
                  <v-card-actions>
                    <v-btn 
                      primary
                      large 
                      block 
                      @click="regist()">新規登録</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container v-if="!isLogin">
        <v-layout 
          row 
          class="text-xs-center">
          <v-flex 
            xs3 
            style="background-image: url('http://cdn.wallpapersafari.com/7/86/gqiGH7.jpg')">
            <v-card height="500px"/>
          </v-flex>
          <v-flex 
            xs9 
            class="grey lighten-4">
            <v-container 
              style="position: relative;top: 13%;" 
              class="text-xs-center">
              <v-card flat>
                <v-card-title primary-title>
                  <h4>Login</h4>
                </v-card-title>
                <v-form>
                  <v-text-field 
                    v-model="mailAddress" 
                    prepend-icon="person" 
                    name="Mail address" 
                    label="Mail address"/>
                  <v-text-field 
                    v-model="password" 
                    prepend-icon="lock" 
                    name="Password" 
                    label="Password" 
                    type="password"/>
                  <v-card-actions>
                    <v-btn 
                      primary
                      large 
                      block 
                      @click="login()">ログイン</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
      <section 
        v-if="!isLogin" 
        class="ex__box">
        <h5>新規登録</h5>
        <p><input 
          v-model="mailAddress" 
          type="text" 
          placeholder="メールアドレス"></p>
        <p><input 
          v-model="password" 
          type="password" 
          placeholder="パスワード"></p>
        <!-- エラーメッセージ表示部分を追加 -->
        <p 
          v-if="authError" 
          class="errMessage">{{ authError }}</p>
        <div class="links">
          <!-- クリックイベントを追加 -->
          <a 
            class="button--green" 
            @click="regist()">新規登録</a>
        </div>
      </section>

      <!-- ログインに v-if="!isLogin" を追加 -->
      <section 
        v-if="!isLogin" 
        class="ex__box">
        <h5>ログイン</h5>
        <p><input 
          v-model="mailAddress" 
          type="text" 
          placeholder="メールアドレス"></p>
        <p><input 
          v-model="password" 
          type="password" 
          placeholder="パスワード"></p>
        <!-- エラーメッセージ表示部分を追加 -->
        <p 
          v-if="authError" 
          class="errMessage">{{ authError }}</p>
        <div class="links">
          <!-- クリックイベントを追加 -->
          <a 
            class="button--green" 
            @click="login()">ログイン</a>
        </div>
      </section>

      <!-- ログアウトに v-if="isLogin" を追加 -->
      <section 
        v-if="isLogin" 
        class="ex__box">
        <h5>ログイン中です</h5>
        <!-- ログイン中ユーザーのメールアドレスを表示 -->
        <p>メールアドレス：{{ $store.state.user.emailAddress }}</p>
        <div class="links">
          <!-- クリックイベントを追加 -->
          <a 
            class="button--grey" 
            @click="logout()">ログアウト</a>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      mailAddress: '',
      password: ''
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.user.isLogin
    },
    authError() {
      return this.$store.state.user.authError
    }
  },
  methods: {
    init: function() {
      this.password = ''
      this.mailAddress = ''
    },
    regist: function() {
      this.$store.dispatch('user/regist', {
        mailAddress: this.mailAddress,
        password: this.password
      })
      this.init()
    },
    login: function() {
      this.$store.dispatch('user/login', {
        mailAddress: this.mailAddress,
        password: this.password
      })
      this.init()
    },
    logout: function() {
      this.$store.dispatch('user/logout')
    }
  }
}
</script>
