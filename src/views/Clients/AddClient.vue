<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import InputGroup from '@/components/Forms/InputGroup.vue'
import SelectGroupTwo from '@/components/Forms/SelectGroup/SelectGroupTwo.vue'

const pageTitle = ref('Add Client')
</script>

<template>
  <DefaultLayout>
    <div class="mx-auto max-w-242.5">
      <!-- Breadcrumb Start -->
      <BreadcrumbDefault :pageTitle="pageTitle" />
      <!-- Breadcrumb End -->

      <div class="grid w-full grid-cols-1 bg-red">
        <div class="flex flex-col bg-success">
          <!-- Contact Form Start -->
          <DefaultCard cardTitle="Fill in the form to register a new client" class="">
            <form action="#">
              <div class="p-6.5">
                <InputGroup
                  label="Client's name"
                  type="text"
                  placeholder="Enter client's name"
                  customClasses="mb-4.5"
                />

                <InputGroup
                  label="Email"
                  type="email"
                  placeholder="Enter client's email address"
                  customClasses="mb-4.5"
                />

                <InputGroup
                  label="Phone Number"
                  type="text"
                  placeholder="Enter client's phone number"
                  customClasses="mb-4.5"
                  required
                />

                <InputGroup
                  label="Location"
                  type="text"
                  placeholder="Enter client's location"
                  customClasses="mb-4.5"
                  required
                />

                <SelectGroupTwo />

                <div class="mb-6">
                  <label class="mb-2.5 block text-black dark:text-white"> Other Details </label>
                  <textarea
                    rows="6"
                    placeholder="Type other details"
                    class="w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  ></textarea>
                </div>

                <button
                  class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Add Client
                </button>
              </div>
            </form>
          </DefaultCard>
          <!-- Contact Form End -->
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
