<template>
    <div class="event bg-light">
        <div class="date">
            <span class="month">Feb</span>
            <span class="day">24</span>
        </div>
        <div class="content">
            <div class="event-title"><a href="#">Lorem ipsum</a></div>
            <div class="event-date">Month 1 2019, 5:30pm - 6:30pm</div>
            <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales ex eget puru tempus convallis. Donec non fermentum </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Event'
    }
</script>
<style scoped>
    .event {
        display:flex;
        padding:25px 15px;
        margin:15px 0px;
    }

    .date {
        width:150px;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        line-height: 1;
        border-right:solid 1px #444;
        padding: 0 25px 0 15px;
    }
    .content {
        padding-left:25px;
    }
    .event-title,.event-date,.description {
        padding:5px 0;
    }
    .date .month {
        font-family:Montserrat;
        font-size:18px;

    }
    .date .day {
        font-size:48px;
        font-weight: bold;
        
    }
    .event-date {
        font-style: italic;
        font-weight:bold;
        font-size:12px;
    }
    .description {
        font-weight:bold;
    }
</style>