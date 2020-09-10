<template>
	<div>

		<v-card flat>
			<v-container fluid>
				<v-row align="center" >
					<v-col>
						<v-card
						class="mx-auto"
						max-width="434"
						tile
						>
							<v-img
							height="100%"
							src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
							>
							<v-row
							align="end"
							class="fill-height"
							>
							<v-col
								align-self="start"
								class="pa-0"
								cols="12"
							>
							<v-avatar
							class="profile"
							color="grey"
							size="164"
							tile
							>
							<v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
							</v-avatar>
						</v-col>
						<v-col class="py-0">
							<v-list-item
							color="rgba(0, 0, 0, .4)"
							dark
							>
							<v-list-item-content>
								<v-list-item-title class="title">
								<input v-if=isEditing type="text" v-model="name">
								<span v-else>{{name}}</span>
								</v-list-item-title>
								<v-list-item-subtitle>Editor</v-list-item-subtitle>
								<v-list-item-title>☆☆☆☆☆ 0.0 (0件)</v-list-item-title>
							</v-list-item-content>
							</v-list-item>
							</v-col>
							</v-row>
							</v-img>
						</v-card>

						<v-card
						max-width="434"
						class="mx-auto"
						elevation="0">
				<br>
						<v-textarea
						color="cyan"
						height="200"
						outlined
						label="自己紹介"
						placeholder="編集をONにして入力してください"
						v-model="selfIntro"
						v-bind:readonly="!isEditing"
						></v-textarea>
						</v-card>
						</v-col>

						<v-col>
			<div> 
				<td> <v-switch v-model="isEditing"></v-switch></td> 
				<td>
					<p prepend-icon="mdi-account-edit">
						<v-icon>mdi-account-edit</v-icon> 編集
						<v-btn small color="primary" v-if="isEditing" @click="updateUserInfo">情報を更新する</v-btn>
					</p>
				</td>
<v-container>
	<v-row>
		<v-col>
				<v-card
				max-width="300"
				min-width="200"
				elevation="0"
				>

						<v-select
						:items="Sitems"
						v-model="sitem"
						filled
						class="mb-n6"
						label="サムネイル作成"
						v-bind:readonly="!isEditing"
						></v-select>

				</v-card>
				<v-card
				elevation="0"
				max-width="300"
				>
					<v-row>
						<v-col>
							<v-select
							:items="Kitems"
							v-model="kitem"
							filled
							class="mb-n6"
							label="希望価格帯"
							v-bind:readonly="!isEditing"
							></v-select>
						</v-col>

						<v-col>
							<v-textarea
							outlined
							color="cyan"
							class="mb-n6"
							height="50"
							label="価格帯詳細"
							placeholder="約3,000円/h"
							v-model="price"
							v-bind:readonly="!isEditing"
							></v-textarea>
						</v-col>
					</v-row>

					<v-row>
						<v-textarea
						color="cyan"
						class="mb-n3"
						height="80"			
						outlined
						label="コメント"
						placeholder="価格相談受け付けます。"
						v-model="comment"
						v-bind:readonly="!isEditing"
						></v-textarea>
					</v-row>
				</v-card>

				<v-select
				:items="Gitems"
				v-model="gitem"
				filled
				class="mb-n3"
				label="業務形態"
				v-bind:readonly="!isEditing"
				></v-select>

				<v-select
				:items="Ditems"
				v-model="ditem"
				filled
				class="mb-n6"
				label="動画編集歴"
				v-bind:readonly="!isEditing"
				></v-select>
		</v-col>
		<v-col>
			<v-btn-toggle maltiple>
				<v-container
				class="mb-n6">
					<v-row>
						<v-col>
							<v-btn
							width="5vw" outlined color="red" value="24h">2
							</v-btn>
						</v-col>
						<v-col
						class="ml-n4">
							<v-btn
							width="5vw" outlined color="red accent-3" value="3d">3
							</v-btn>
						</v-col>
						<v-col
						class="ml-n4">
							<v-btn
							width="5vw" outlined color="pink" value="1w">一
							</v-btn>
						</v-col>
					</v-row>
				</v-container>
			</v-btn-toggle>
		</v-col>
	</v-row>
</v-container>

	</div>
			</v-col>
			</v-row>
			</v-container>
			
          </v-card>
		<!-- ユーザ名は登録情報に関わるため変更不可能 -->
		<v-text-field label="ユーザー名" type="text" v-model="name" readonly />
		<v-text-field label="メールアドレス" type="text" v-model="mail" v-bind:readonly="!isEditing"/>
		<v-text-field label="好きな食べ物" type="text" v-model="food" v-bind:readonly="!isEditing" />
	</div>
</template>

<script>
/* eslint-disable no-console */
</script>
<style scoped>
</style>
