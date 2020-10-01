<template>
	<div>
	<v-card flat>
		<v-container>
			<v-row>
				<v-col>
					<v-container fluid fill-height>
						<v-card outlined
						elevation="3">
							<v-avatar
							class="profile"
							color="grey"
							size="200"
							>
							<v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
							</v-avatar>
						</v-card>
						<v-card outlined
						elevation="3" class="mt-4" width="200">
							<v-list-item-title class="title">
							<input v-if=isEditing type="text" v-model="name">
							<span v-else>{{name}}</span>
							</v-list-item-title>
							<v-list-item-subtitle>Editor</v-list-item-subtitle>
							<v-list-item-title>☆☆☆☆☆ 0.0 (0件)</v-list-item-title>
							<v-divider></v-divider>
							<p class="font-weight-black">得意ジャンル</p> 
							<h1 class="mt-n5" align="center">あいう</h1>
							<p class="font-weight-black">作業スピード</p>
							<h1 class="mt-n5" align="center">あいう</h1>
							<p class="font-weight-black">編集クオリティ</p>
							<h1 class="mt-n5" align="center">あいう</h1>
						</v-card>
					</v-container>
				</v-col>
				<v-col>
					<p class="font-weight-black">希望価格帯</p>
						<v-col cols="12">
							<v-text-field
							value="John Doe"
							label="Solo"
							solo
							readonly
							outlined
							class="my-n5"
							></v-text-field>
						</v-col>
					<p class="font-weight-black">サムネイル作成</p>
						<v-col cols="12">
							<v-text-field
							value="John Doe"
							label="Solo"
							solo
							readonly
							outlined
							class="my-n5"
							></v-text-field>
						</v-col>
					<p class="text--disabled">編集ソフト</p>
						<v-col cols="12">
							<v-text-field
							value="工事中"
							label="Solo"
							solo
							disabled
							outlined
							class="my-n5"
							></v-text-field>
						</v-col>
					<p class="text--disabled">編集例</p>
						<v-col cols="12">
							<v-text-field
							value="工事中"
							label="Solo"
							solo
							disabled
							outlined
							class="my-n5"
							></v-text-field>
						</v-col>
				</v-col>
				<v-col>
					<v-textarea
						color="cyan"
						height="250"
						outlined
						label="自己紹介"
						placeholder="編集をONにして入力してください"
						v-model="selfIntro"
						v-bind:readonly="!isEditing"
						class="mt-8"
					></v-textarea>
					<div class="ml-12 mt-4" fluid>
					<v-btn x-large color="success" dark>
					<h3>コンタクト</h3></v-btn>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</v-card>
	</div>
</template>

<script>
/* eslint-disable no-console */
</script>
<style scoped>
</style>
