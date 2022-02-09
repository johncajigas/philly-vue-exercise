<template>

    <div class="connect">
      <div class="columns">
        <div class="column">
          <dl>
            <dt>Address</dt>
            <dd>
              {{ address.address_1 }}
              <span v-if="address.address_2">
                <br />
                {{ address.address_2 }}
              </span>
              <br />
              {{ address.city }},&nbsp;{{ address.state }}&nbsp;{{ address.zip
              }}<br />
              <a :href="address.map_url" target="_blank"
                >Map <font-awesome-icon :icon="['fas', 'external-link-alt']" />
              </a>
            </dd>
          </dl>
        </div>
        <div class="column">
          <dl>
            <dt>Hours</dt>
            <dd>
                <span v-if="hours[currentDay].exception ==='1'">
                    {{ hours[currentDay][`exception_${currentDay}`]}}
                </span>
                <span v-else>
                    From {{hours[currentDay].start_time}} - {{hours[currentDay].end_time}}
                </span>
                <br/>
                <br/>
                    <a href="#">See all hours</a>
                 
            </dd>
        
          </dl>
          
         
              
           
        </div>
        <div class="column center">

            <dl>
                <dt>Contact</dt>
                <dd>
                    <div class="contact-item"><a :href="'mailto:' + contact.email"> {{contact.email}}</a></div>
                    <div class="contact-item">
                        {{contact.phone}}
                    </div>
                    <div class="contact-item social-icons">
                        <a :href="contact.facebook"><font-awesome-icon :icon="['fab', 'facebook']" />
                        </a>
                        <a :href="contact.twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                        <a :href="contact.instagram"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                    </div>
                </dd>
            </dl>
        </div>
      </div>
    </div>
</template>

<script>
import request from "@/api/request";
import { library } from "@fortawesome/fontawesome-svg-core";
 import { faFacebook, faTwitter, faInstagram,} from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faFacebook)
library.add(faInstagram)
library.add(faTwitter)
library.add(faExternalLinkAlt);
const dayOfWeek = () => new Date().getDay();
export default {
  name: "Connect",

  data() {
    return {
      address: {},
      contact: {},
      hours: {
        monday: {},
        tuesday: {},
        wednesday: {},
        thursday: {},
        friday: {},
        saturday: {},
        sunday: {},
      },
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      { immediate: true }
    );
  },
  computed: {
    currentDay (){
        return Object.keys(this.hours)[dayOfWeek()];
    } 
  },
  methods: {
    fetchData() {
      this.loading = true;
      request(
        "https://locations-staging-admin.phila.gov/love-park/wp-json/locations/v1/connect",
        (data, err) => {
          if (err) return (this.error = err.toString());
          this.address = data.address;
          this.contact = data.contact;
          this.hours = data.hours;
        }
      );
    },

  },
};
</script>
<style scoped>
.connect {
    padding:0 1rem;
}
.connect .column {
  display: flex;
  justify-content: center;
  
}
.connect .column:not(:first-child) {
  border-left: solid 1px #4a4a4a;
}

@media screen and (max-width:768px){
    .connect .column {
        border-bottom:solid 1px #4a4a4a;
         border-left: none!important;
        justify-content: flex-start;
    }
  
}
</style>
