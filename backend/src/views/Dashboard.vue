<template>
    <DashboardLayout>
        <div class="container mx-auto mt-12">
        <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
            <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div class="text-sm font-medium text-gray-500 truncate">
                    Total users
                </div>
                <div class="mt-1 text-3xl font-semibold text-gray-900">
                    12,00
                </div>
            </div>
            <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div class="text-sm font-medium text-gray-500 truncate">
                    Total Profit
                </div>
                <div class="mt-1 text-3xl font-semibold text-gray-900">
                    $ 450k
                </div>
            </div>
            <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div class="text-sm font-medium text-gray-500 truncate">
                    Total Orders
                </div>
                <div class="mt-1 text-3xl font-semibold text-gray-900">20k</div>
            </div>
        </div>
    </div>
    </DashboardLayout>
</template>
<script setup>
import { LockClosedIcon } from "@heroicons/vue/20/solid";

import DashboardLayout from "../components/DashboardLayout.vue";

</script>
