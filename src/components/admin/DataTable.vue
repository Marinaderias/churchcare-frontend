<template>

<div class="table-wrapper">

    <!-- Desktop -->

    <table class="desktop-table">

        <thead>

            <tr>

                <th
                    v-for="column in columns"
                    :key="column.key"
                >
                    {{ column.label }}
                </th>

                <th>Actions</th>

            </tr>

        </thead>

        <tbody>

            <tr
                v-for="row in rows"
                :key="row.id"
            >

                <td
                    v-for="column in columns"
                    :key="column.key"
                >

                    {{ row[column.key] }}

                </td>

                <td>

                    <button
                        class="edit-btn"
                        @click="$emit('edit', row)"
                    >
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        @click="$emit('delete', row)"
                    >
                        Delete
                    </button>

                </td>

            </tr>

        </tbody>

    </table>

    <!-- Mobile -->

    <div
        class="mobile-cards"
    >

        <div
            class="card"
            v-for="row in rows"
            :key="row.id"
        >

            <div
                v-for="column in columns"
                :key="column.key"
                class="item"
            >

                <strong>

                    {{ column.label }}

                </strong>

                <span>

                    {{ row[column.key] }}

                </span>

            </div>

            <div class="actions">

                <button
                    class="edit-btn"
                    @click="$emit('edit', row)"
                >
                    Edit
                </button>

                <button
                    class="delete-btn"
                    @click="$emit('delete', row)"
                >
                    Delete
                </button>

            </div>

        </div>

    </div>

</div>

</template>

<script setup>

defineProps({

    columns: Array,

    rows: Array

})

defineEmits([

    'edit',

    'delete'

])

</script>

<style scoped>

.table-wrapper{

    width:100%;

}

/* Desktop */

.desktop-table{

    width:100%;

    border-collapse:collapse;

    background:white;

    border-radius:20px;

    overflow:hidden;

}

th{

    background:#f6f6f6;

}

th,
td{

    padding:16px;

    text-align:left;

    border-bottom:1px solid #eee;

}

.edit-btn{

    background:#2563eb;

    color:white;

    border:none;

    padding:8px 14px;

    border-radius:8px;

    cursor:pointer;

    margin-right:10px;

}

.delete-btn{

    background:#ef4444;

    color:white;

    border:none;

    padding:8px 14px;

    border-radius:8px;

    cursor:pointer;

}

/* Mobile */

.mobile-cards{

    display:none;

}

@media(max-width:768px){

.desktop-table{

    display:none;

}

.mobile-cards{

    display:flex;

    flex-direction:column;

    gap:18px;

}

.card{

    background:white;

    padding:18px;

    border-radius:18px;

    box-shadow:0 5px 15px rgba(0,0,0,.08);

}

.item{

    display:flex;

    justify-content:space-between;

    margin-bottom:12px;

}

.actions{

    display:flex;

    gap:10px;

    margin-top:15px;

}

.edit-btn,
.delete-btn{

    flex:1;

}

}

</style>

