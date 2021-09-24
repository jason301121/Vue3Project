<template>
    <!-- Modal -->
    <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h3 class="modal-title">
                        <slot name="modalCategory" ></slot> 
                    </h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    確定要刪除 <strong class="text-danger">{{ item.title }}</strong> 嗎? (刪除後將無法恢復)
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-danger" @click="$emit('del-item')">確認刪除</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import modalMixin from '@/mixin/modalMixin';
export default {
    props:{
        item:{},
    },
    mixins:[modalMixin],
}
</script>