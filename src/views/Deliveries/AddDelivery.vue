<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import SelectGroupConsigner from '@/components/Forms/SelectGroup/SelectGroupConsigner.vue'
import SelectGroupTwo from '@/components/Forms/SelectGroup/SelectGroupTwo.vue'
import SelectGroupCat from '@/components/Forms/SelectGroup/SelectGroupCat.vue'
import SelectGroupTransport from '@/components/Forms/SelectGroup/SelectGroupTransport.vue'

import InputGroup from '@/components/Forms/InputGroup.vue'

const pageTitle = ref('Add Delivery')
</script>

<template>
  <DefaultLayout>
    <div class="mx-auto max-w-242.5">
      <BreadcrumbDefault :pageTitle="pageTitle" />
      <div class="grid w-full grid-cols-1 bg-red">
        <div class="flex flex-col bg-success">
          <DefaultCard cardTitle="Fill in the form to register a new delivery contract" class="">
            <form action="#" class="w-full p-6">
              <div class="p-0 mb-2 flex flex-row justify-between items-center gap-x-6">
                <SelectGroupConsigner />

                <InputGroup
                  label="Way Bill Number"
                  type="text"
                  placeholder=""
                  customClasses="mb-4.5"
                />
              </div>

              <div class="pb-2 flex flex-row justify-between items-center gap-x-6 border-b">
                <span class="font-semibold text-black dark:text-white">Deliveries (01)</span>
                <span class="font-semibold text-black dark:text-white">Total No. Items (01)</span>
              </div>

              <div class="ml-6">
                <div class="p-6.5 flex flex-row justify-between items-center gap-x-6">
                  <span class="font-semibold text-black dark:text-white"> 1 Way Bill No (02)</span>
                  <span class="font-semibold text-black dark:text-white">
                    <div class="flex items-center space-x-3.5">
                      <button class="hover:text-primary">
                        <svg
                          class="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                            fill=""
                          />
                          <path
                            d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                            fill=""
                          />
                        </svg>
                      </button>

                      <button class="hover:text-primary text-[#d97706]">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>

                      <button class="hover:text-primary text-red">
                        <svg
                          class="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                            fill=""
                          />
                          <path
                            d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                            fill=""
                          />
                          <path
                            d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                            fill=""
                          />
                          <path
                            d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </div>
                  </span>
                </div>
                <div class="p-2 flex flex-row justify-between items-center gap-x-6 border-b">
                  <span class="font-semibold text-black dark:text-white">Receiever Details</span>
                  <span class="font-semibold text-black dark:text-white">
                    <svg
                      class="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g></svg
                  ></span>
                </div>
                <div class="p-6.5 flex flex-row justify-between items-center gap-x-6">
                  <SelectGroupConsigner />

                  <InputGroup
                    label="Salutation"
                    type="text"
                    placeholder=""
                    customClasses="mb-4.5"
                  />
                </div>
                <div class="p-6.5 flex flex-row justify-between items-center gap-x-6">
                  <InputGroup
                    label="Receiver's Name"
                    type="text"
                    placeholder=""
                    customClasses="mb-4.5"
                  />
                  <InputGroup
                    label="Receiver's Primary Contact"
                    type="text"
                    placeholder=""
                    customClasses="mb-4.5"
                  />
                </div>
                <div class="p-6.5 flex flex-row justify-between items-center gap-x-6">
                  <InputGroup
                    label="Receiver's Other Contact"
                    type="text"
                    placeholder=""
                    customClasses="mb-4.5"
                  />
                  <InputGroup
                    label="Relationship"
                    type="text"
                    placeholder=""
                    customClasses="mb-4.5"
                  />
                </div>
                <div class="p-2 flex flex-row justify-between items-center gap-x-6 border-b">
                  <span class="font-semibold text-black dark:text-white">Consignment Details</span>
                  <span class="font-semibold text-black dark:text-white">
                    <svg
                      class="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g></svg
                  ></span>
                </div>
                <div class="p-6.5 flex flex-row justify-between items-center gap-x-6">
                  <InputGroup
                    label="Scheduled Dispatch Date"
                    type="date"
                    placeholder=""
                    customClasses="mb-4.5"
                  />
                  <InputGroup
                    label="Scheduled Arrival Date"
                    type="date"
                    placeholder=""
                    customClasses="mb-4.5"
                  />
                </div>
                <div class="p-6.5 flex flex-row justify-between items-center gap-x-6">
                  <InputGroup label="Source" type="text" placeholder="" customClasses="mb-4.5" />
                  <InputGroup
                    label="Destination"
                    type="text"
                    placeholder=""
                    customClasses="mb-4.5"
                  />
                </div>
                <div class="p-6.5 flex flex-row justify-between items-center gap-x-6">
                  <InputGroup
                    label="Destination Location"
                    type="text"
                    placeholder=""
                    customClasses="mb-4.5"
                  />
                  <InputGroup
                    label="Destination Address"
                    type="text"
                    placeholder=""
                    customClasses="mb-4.5"
                  />
                </div>
                <div class="p-6.5 flex flex-row justify-between items-center gap-x-6">
                  <SelectGroupTwo />
                  <SelectGroupTransport />
                </div>
                <div class="p-6.5">
                  <label class="mb-2.5 block text-black dark:text-white"> Other Details </label>
                  <textarea
                    rows="6"
                    placeholder="Type other details"
                    class="w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  ></textarea>
                </div>
                <div class="p-2 flex flex-row justify-between items-center gap-x-6 border-b">
                  <span class="font-semibold text-black dark:text-white">Items</span>
                  <span class="font-semibold text-black dark:text-white">
                    <svg
                      class="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g></svg
                  ></span>
                </div>
                <div class="p-6.5 flex flex-row justify-between items-center gap-x-6">
                  <span class="font-semibold text-black dark:text-white">1</span>
                  <span class="font-semibold text-black dark:text-white">
                    <div class="flex items-center space-x-3.5">
                      <button class="hover:text-primary">
                        <svg
                          class="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                            fill=""
                          />
                          <path
                            d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                            fill=""
                          />
                        </svg>
                      </button>

                      <button class="hover:text-primary text-[#d97706]">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>

                      <button class="hover:text-primary text-red">
                        <svg
                          class="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                            fill=""
                          />
                          <path
                            d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                            fill=""
                          />
                          <path
                            d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                            fill=""
                          />
                          <path
                            d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </div>
                  </span>
                </div>
                <div class="p-6.5 flex flex-row justify-between items-center gap-x-6">
                  <InputGroup label="Item Name" type="text" placeholder="" customClasses="mb-4.5" />
                  <SelectGroupCat />
                </div>
                <div class="p-6.5">
                  <label class="mb-2.5 block text-black dark:text-white"> Item Description </label>
                  <textarea
                    rows="6"
                    placeholder="Type items description"
                    class="w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  ></textarea>
                </div>
                <div class="p-6.5 flex flex-row justify-between items-center gap-x-6">
                  <button
                    class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  >
                    Add Another Item
                  </button>

                  <button
                    class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  >
                    Add Delivery
                  </button>
                </div>
              </div>
            </form>
          </DefaultCard>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>