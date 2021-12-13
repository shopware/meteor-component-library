<template>
  <div
    class="sw-address"
    :class="addressClasses"
  >

    <div
      v-if="headline"
      class="sw-address__headline"
    >
      {{ headline }}
<!--      <router-link-->
<!--        v-if="showEditButton && editLink"-->
<!--        class="sw-address-headline-link"-->
<!--        :to="editLink"-->
<!--      >-->
<!--        {{ $tc('global.default.edit') }}-->
<!--      </router-link>-->
    </div>

    <div class="sw-address__body">
      <div
        v-if="address.company"
        class="sw-address__company sw-address__line"
      >
        {{ address.company }}
      </div>

      <div
        v-if="address.lastName"
        class="sw-address__full-name sw-address__line"
      >
        {{ address | salutation }}
      </div>

      <div
        v-if="address.street"
        class="sw-address__street sw-address__line"
      >
        {{ address.street }}
      </div>

      <div
        v-if="address.additionalAddressLine1"
        class="sw-address__additional-line-1 sw-address__line"
      >
        {{ address.additionalAddressLine1 }}
      </div>

      <div
        v-if="address.additionalAddressLine2"
        class="sw-address__additional-line-2 sw-address__line"
      >
        {{ address.additionalAddressLine2 }}
      </div>

      <div
        v-if="address.city || address.zipcode"
        class="sw-address__location sw-address__line"
      >
        <span v-if="address.zipcode">{{ address.zipcode }} </span>

        <span v-if="address.city">{{ address.city }}</span>
      </div>

      <div class="sw-address__line">
            <span v-if="address.countryState && address.countryState.name">
                {{ address.countryState.name }},
            </span>

        <span
          v-if="address.country && address.country.name"
          class="sw-address__country"
        >
                {{ address.country.name }}
            </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sw-address',

  props: {
    address: {
      type: Object,
      default() {
        return {
          salutation: '',
          title: '',
          firstName: '',
          lastName: '',
          street: '',
          zipcode: '',
          city: '',
          country: {
            name: '',
          },
          countryState: {
            name: '',
          },
        };
      },
    },

    headline: {
      type: String,
      required: false,
      default: '',
    },

    showEditButton: {
      type: Boolean,
      required: false,
      default: false,
    },

    editLink: {
      type: Object,
      required: false,
      default: null,
    },
  },

  computed: {
    addressClasses() {
      return {
        'sw-address--headline': this.headline,
      };
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.sw-address {
  margin-bottom: 20px;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  color: $color-darkgray-200;

  .sw-address__headline {
    margin: 0 0 20px 0;
    color: $color-darkgray-200;
    font-weight: normal;
    font-size: 18px;

    .sw-address-headline-link {
      font-size: 14px;
      color: $color-shopware-brand-500;
      text-decoration: none;
    }
  }
}
</style>
