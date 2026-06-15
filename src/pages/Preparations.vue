<template>

  <div class="feed-container">

    <h1>📚 Preparations Feed</h1>

    <div class="create-card">

      <select v-model="type">

  <option value="article">
    📝 Article
  </option>

  <option value="image">
    📷 Image
  </option>

  <option value="video">
    🎥 Video
  </option>

  <input
  v-if="type === 'image'"
  v-model="media"
  placeholder="Image URL"
/>

<input
  v-if="type === 'video'"
  v-model="media"
  placeholder="YouTube / Facebook Video Link"
/>

</select>

      <input
        v-model="title"
        placeholder="Preparation Title"
      />

      <textarea
        v-model="content"
        placeholder="Write your preparation..."
      ></textarea>

      <button @click="createPreparation">
        Publish
      </button>

    </div>

    <div
      class="feed-card"
      v-for="post in preparations"
      :key="post.id"
    >

      <div class="post-header">

        <div class="avatar">
          {{ post.user?.name?.charAt(0) }}
        </div>

        <div>

          <h3>{{ post.user?.name }}</h3>

          <small>
            {{ formatDate(post.created_at) }}
          </small>

        </div>

      </div>

      <div class="post-body">

  <h2>
    {{ post.title }}
  </h2>

  <p>
    {{ post.content }}
  </p>

  <img
  v-if="post.type === 'image'"
  :src="post.media"
  class="post-image"
   />

  <div class="post-actions">

    <a
  v-if="post.type === 'video'"
  :href="post.media"
  target="_blank"
  class="video-link"
>
  🎥 Watch Video
</a>

  <button
    class="edit-btn"
    @click="editPreparation(post)"
  >
    ✏️ Edit
  </button>

  <button
    class="delete-btn"
    @click="deletePreparation(post.id)"
  >
    🗑️ Delete
  </button>

</div>

</div>

    </div>

  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const preparations = ref([])

const title = ref('')
const content = ref('')
const type = ref('article')
const editingId = ref(null)

const media = ref('')

async function loadPreparations() {

  try {

    const response =
      await api.get('/preparations')

    preparations.value =
      response.data

  } catch(error) {

    console.error(error)

  }

}

async function createPreparation() {

  console.log('clicked')

  try {

let response

if(editingId.value){

  response = await api.put(
    `/preparations/${editingId.value}`,
    {
      title: title.value,
      content: content.value,
      type: type.value,
      media: media.value
    }
  )

}else{

  response = await api.post(
    '/preparations',
    {
      user_id: 1,
      title: title.value,
      content: content.value,
      type: type.value,
      media: media.value
    }
  )

}

    console.log(response.data)
    editingId.value = null

    await loadPreparations()

     title.value = ''
     content.value = ''
     media.value = ''

  } catch(error) {

    console.log('ERROR =>', error.response)

    console.error(error)

  }

}

function formatDate(date) {

  return new Date(date)
    .toLocaleDateString()

}

onMounted(() => {

  loadPreparations()

})

function editPreparation(post){

  editingId.value = post.id

  title.value = post.title

  content.value = post.content

}

async function deletePreparation(id){

  if(!confirm('Delete this preparation?'))
    return

  try{

    await api.delete(
      `/preparations/${id}`
    )

    await loadPreparations()

  }catch(error){

    console.error(error)

  }

}

</script>

<style scoped>

.feed-container{

  max-width:700px;

  margin:auto;

  padding:20px;
}

.create-card{

  background:white;

  padding:20px;

  border-radius:20px;

  margin-bottom:20px;

  box-shadow:0 4px 12px rgba(0,0,0,.08);
}

.create-card input,
.create-card textarea{

  width:100%;

  margin-bottom:10px;

  padding:12px;

  border-radius:12px;

  border:1px solid #ddd;

  box-sizing:border-box;
}

.create-card textarea{

  min-height:120px;
}

.create-card button{

  width:100%;

  padding:12px;

  border:none;

  border-radius:12px;

  background:black;

  color:white;

  cursor:pointer;
}

.feed-card{

  background:white;

  padding:20px;

  border-radius:20px;

  margin-bottom:15px;

  box-shadow:0 4px 12px rgba(0,0,0,.08);
}

.post-header{

  display:flex;

  gap:10px;

  align-items:center;

  margin-bottom:15px;
}

.avatar{

  width:50px;

  height:50px;

  border-radius:50%;

  background:black;

  color:white;

  display:flex;

  justify-content:center;

  align-items:center;

  font-weight:bold;
}

.feed-card h2{

  margin-top:0;
}

.post-image{

  width:100%;

  border-radius:15px;

  margin-top:15px;
}

.post-video{

  width:100%;

  border-radius:15px;

  margin-top:15px;
}

.post-body h2{

  margin-top:15px;

  font-size:22px;
}

.post-body p{

  line-height:1.8;

  color:#555;
}

.post-actions{

  display:flex;

  gap:10px;

  margin-top:20px;
}

.edit-btn{

  flex:1;

  border:none;

  padding:10px;

  border-radius:12px;

  background:#eee;

  cursor:pointer;
}

.delete-btn{

  flex:1;

  border:none;

  padding:10px;

  border-radius:12px;

  background:black;

  color:white;

  cursor:pointer;
}
select{

  width:100%;

  padding:12px;

  margin-bottom:10px;

  border-radius:12px;

  border:1px solid #ddd;
}

.video-link{

  display:inline-block;

  margin-top:15px;

  text-decoration:none;

  background:black;

  color:white;

  padding:10px 15px;

  border-radius:10px;
}

</style>