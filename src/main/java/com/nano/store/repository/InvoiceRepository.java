package com.nano.store.repository;
import java.util.Optional;

import com.nano.store.domain.Invoice;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Invoice entity.
 */
@SuppressWarnings("unused")
@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

	Page<Invoice> findAllByOrderCustomerUserLogin(String login, Pageable page);

	Optional<Invoice> findByIdAndOrderCustomerUserLogin(Long id, String login);
	

}
